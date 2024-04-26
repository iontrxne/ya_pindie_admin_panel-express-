const gamesRouter = require('express').Router();
const { sendAllGamesController, deleteGameController, addGameController } = require('../controllers/games')
const { getAllGames } = require('../middlewares/games')

gamesRouter.get("/games", getAllGames, sendAllGamesController)
gamesRouter.delete("/games/:id", getAllGames, deleteGameController);
gamesRouter.post("/games", getAllGames, addGameController)

module.exports = gamesRouter; 