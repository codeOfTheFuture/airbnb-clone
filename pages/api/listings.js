import { connectToDatabase } from "../../middleware/database";

const getListings = async (req, res) => {
  const { db } = await connectToDatabase();

  const listings = await db.collection("listings").find({}).toArray();

  res.json(listings);
};

export default getListings;
