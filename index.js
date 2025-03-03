const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
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