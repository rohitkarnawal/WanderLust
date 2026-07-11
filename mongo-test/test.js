const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://rohit-dev:Rohit3315@cluster0.2spig6a.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();