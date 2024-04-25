const express = require('express');

const PORT = 3000;
const app = express();

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

app.use(mainRoute, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 