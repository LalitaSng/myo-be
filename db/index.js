const mongoose = require('mongoose');
const Member = require('../Models/Member');

main().then(()=>{
    console.log('Myo Connected to Mongo DB')
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/myo');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://lalitasng1534:$DhqQr2fj7L6E-$@myo.lujhmgu.mongodb.net/?retryWrites=true&w=majority&appName=myo";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
