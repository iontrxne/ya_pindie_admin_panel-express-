const gamesRouter = require('express').Router();
const { readData, writeData } = require('../utils/data');

//берём все игры
const getAllGames = async (req, res) => {
  const games = await readData('./data/games.json');
  
  if(!games) {
    res.status(400);
    res.send({
      status: 'error',
      message: 'Нет игр в базе данных. Добавьте игру.'
    });

    return;
  }

  req.games = games;
  res.send(req.games);
}

//Удаляем игру по id
const deleteGame = async (req, res) => {
  const games = await readData('./data/games.json');
  
  if(!games) {
    res.status(400);
    res.send({
      status: 'error',
      message: 'Нет игр в базе данных. Добавьте игру.'
    });

    return;
  }

  req.games = games;
  const id = Number(req.params.id);
  req.game = req.games.find((item) => item.id === id);
  const index = req.games.findIndex((item) => item.id === req.game.id);
  req.games.splice(index, 1);
  await writeData("./data/games.json", req.games);

  res.send({
    games: req.games,
    updated: req.game
  });
};


gamesRouter.get("/games", getAllGames)
gamesRouter.delete("/games/:id", deleteGame);

module.exports = gamesRouter; 