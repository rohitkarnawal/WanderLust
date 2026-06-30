const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then( () => {
    console.log("connected tp db");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL)
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("hi im root");
})

//index route
app.get("/listings", async (req, res) => {
   const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// new route 
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

// create route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
})

//edit
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})

//show route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/show.ejs", {listing});
});

//Update req
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
})

// delete
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`);
})

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title: "My new villa",
//         description: "By the Beach",
//         price: 1200,
//         location: "Jalandhar, punjab",
//         country: "India",
//     });

//    await sampleListing.save();
//    console.log("Sample was save");
//    res.send("sucessfull");
// })


app.listen(8080, ()=> {
    console.log("Listening on port 8080");
});