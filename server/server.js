const express = require('express');
const path = require('path');
const app = express();

const PORT = 3006;


/* Serve static */
app.use(express.static(path.resolve(__dirname, '../client/index.html'))); // serves the index.html

/* Start server on port: PORT */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});