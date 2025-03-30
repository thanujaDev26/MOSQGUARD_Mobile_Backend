import admin from "firebase-admin";
import fs from "fs";

// Read the JSON file manually
const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

if (!serviceAccount) {
  console.error("Firebase serviceAccountKey.json is missing.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: process.env.FIREBASE_DATABASE_URL, 
});

export default admin;
