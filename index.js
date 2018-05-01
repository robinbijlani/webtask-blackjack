const Game = require("./src/Game");
const Storage = require("./src/Storage");

const actions = ["hit", "stand"];

const saveAndSummarize = function(data, game, res) {
  data[game.id] = game;
  Storage.storeData(data)
    .then(() => {res.end(game.summary());})
    .catch(err => res.end("ERROR: " + err.message));
};

const deleteAndSummarize = function(data, game, res) {
  delete data[game.id];
  Storage.storeData(data)
    .then(() => {res.end(game.summary());})
    .catch(err => res.end("ERROR: " + err.message));
};

module.exports = function(ctx, req, res) {
  Storage.init(ctx.storage);
  res.writeHead(200, { "Content-Type": "text/html" });

  //Fetch existing storage
  Storage.getStoredData()
    .then(data => { 

      // Start a new game
      if(!ctx.query.hasOwnProperty('id')) {
        let game = new Game();
        return saveAndSummarize(data, game, res);
      }

      let id = ctx.query["id"];

      // Desired ID not found in storage
      if (!data.hasOwnProperty(id)) {
        return res.end(`Game with ID ${id} could not be found. Sorry!<br><br><a href="/webtask-blackjack">Start a new game.</a>`);
      }

      let game = new Game(data[id]);

      // If no valid action provided, return game gummary
      if (!"action" in ctx.query ||actions.indexOf(ctx.query["action"]) === -1) {
        return res.end(game.summary());
      }

      switch (ctx.query["action"]) {
        case "hit":
          game.hit();
          return game.isComplete() ? 
            deleteAndSummarize(data, game, res) : 
            saveAndSummarize(data, game, res);

          case "stand":
            game.stand();
            return deleteAndSummarize(data, game, res);
      }
      

    })
    .catch(err => res.end("ERROR: " + err.message));

};



