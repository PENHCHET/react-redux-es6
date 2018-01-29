//import axios from `axios`
var axios = require("axios")

module.exports = {
    fetchPopularRepos: function(language) {
        var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=starts:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        console.log(encodedURI);
        return axios.get(encodedURI)
            .then((response) => {
                return response.data.items;
            })

    }
}