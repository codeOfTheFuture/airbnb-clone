import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const dbName = process.env.NEXT_PUBLIC_MONGODB_DB;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connectDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to mongoDB");
  } catch (e) {
    console.log("Could not connect to mongoDB");
  }
};

export const getDatabase = async () => {
  try {
    const db = await client.db(dbName);
    return db;
  } catch (e) {
    console.log("Could not get database");
  }
};

export const closeDatabase = async () => {
  try {
    await client.close();
    console.log("Disconnected from mongoDB");
  } catch (e) {
    console.log("Could not disconnect from mongoDB");
  }
};

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
