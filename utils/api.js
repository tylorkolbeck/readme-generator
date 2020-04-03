const axios = require("axios")

const api = {
  queryString: "https://api.github.com/users/",
  headers: {
    authorization: `Bearer ${process.env.USER_TOKEN}`,
  },

  getUser(username) {
    if (username) {
      return axios.get(`${this.queryString}${username}`, {
        headers: process.env.USER_TOKEN && this.headers,
      })
    } else {
      return { data: {} }
    }
  },
}

module.exports = api
