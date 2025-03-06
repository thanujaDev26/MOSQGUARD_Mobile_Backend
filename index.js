const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
console.log("Private Key:", process.env.FIREBASE_PRIVATE_KEY ? "Loaded" : "Not Loaded");
const admin = require('firebase-admin');

const privateKey = process.env.FIREBASE_PRIVATE_KEY 
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') 
  : null;

if (!privateKey) {
    console.error("❌ ERROR: FIREBASE_PRIVATE_KEY is not defined in .env file");
    process.exit(1);
}

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
  res.send('Node.js with Firebase and .env is working! 🚀');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});