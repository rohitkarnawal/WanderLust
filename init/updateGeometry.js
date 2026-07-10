const mongoose = require("mongoose");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");

  const listings = await Listing.find({});

  for (let listing of listings) {
    // Skip if geometry already exists
    if (listing.geometry && listing.geometry.coordinates.length > 0) {
      console.log(`Skipped: ${listing.title}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          listing.location
        )}&limit=1`,
        {
          headers: {
            "User-Agent": "WanderLust/1.0",
          },
        }
      );

      const data = await response.json();

      if (data.length > 0) {
        listing.geometry = {
          type: "Point",
          coordinates: [
            parseFloat(data[0].lon),
            parseFloat(data[0].lat),
          ],
        };

        await listing.save();
        console.log(`Updated: ${listing.title}`);
      } else {
        console.log(`Location not found: ${listing.location}`);
      }
    } catch (err) {
      console.log(`Error updating ${listing.title}:`, err.message);
    }

    // Nominatim ko spam na kare
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log("All done!");
  mongoose.connection.close();
}

main().catch(console.error);