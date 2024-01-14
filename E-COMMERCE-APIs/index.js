var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World');
});
app.listen(5000);

// const data_base = require("./config/db");
// data_base.Connect_db();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vercel-admin-user:eowHf6gEGSlKH0Ox@cluster0.uoeh5op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);










 