const axios = require("axios")

const api = {
  queryString: "https://api.github.com/users/",
  headers: {
    authorization: `Bearer ${process.env.USER_TOKEN}`
  },

  getUser(username) {
    let apiCall = axios.get(`${this.queryString}${username}`, {
      headers: this.headers
    })

    return apiCall
  }
}

// api.getUser("tylorkolbeck").then(res => console.log(res))

module.exports = api

// status
// data.avatar_url
// data.email
