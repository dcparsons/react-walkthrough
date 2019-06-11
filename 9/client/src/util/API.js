import axios from "axios";

export default {
    getGamesByTitle: function (gameTitle) {
        // ?? What do we do here?  We don't have an API to call...
        // Well, we technically could call our boardgame API but this is a client side app
        // and our app key should really be protected...hmmm
        return axios
        .get("http://localhost:3001/api/games?game=" + gameTitle);

    }
}