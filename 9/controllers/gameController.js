const axios = require("axios");

module.exports = {
    getGameByTitle : function(req, res){
        let query = req.query.game;
        axios
        .get("https://www.boardgameatlas.com/api/search?name=" + query + "&limit=15&client_id=tkSGAR7CcV")
        .then(function(results){
            res.json(results.data);
        }   );
    }
}