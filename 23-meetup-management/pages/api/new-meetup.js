import { MongoClient } from "mongodb";

const hanlder = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mnaveensmn:YO5X9Mfva6hiZ0FV@cluster0.q9ej8.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    
    const db = client.db();

    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meeting Inserted!" });
  }
};

export default hanlder;
