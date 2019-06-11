const axios = require("axios");

module.exports = {
    getGameByTitle : function(req, res){
        const { query: params } = req;
        axios
        .get("https://www.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=tkSGAR7CcV", {
          params
        })
        .then(function(results){
            res.json(results.data);
        }   );
    }
}