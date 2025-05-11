const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors()); // Enable CORS

// Serve static files from the directory where LocalServer.json is located
app.use(express.static(path.join(__dirname, 'C:/React_IT/Practice/Day_6/routing/LocalServer.json')));

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
