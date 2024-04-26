const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = require('./config')
const { cors } = require('./middlewares/cors')

const app = express();

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRoute, 
  gamesRouter
); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
}) 