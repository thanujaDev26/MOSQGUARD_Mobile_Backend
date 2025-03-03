const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});