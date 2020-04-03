const axios = require("axios");
require("dotenv").config();
console.log(process.env.USER_TOKEN);
const api = {
  queryString: "https://api.github.com/users/",
  // TODO: Return promise for GitHub api response to get user data.
  // (Hint: Use axios to send a get request and return the promise created by calling axios.get())
  getUser(username) {
    let apiCall = axios.get(`${this.queryString}${username}`, {
      headers: {
        authorization: `Bearer ${process.env.USER_TOKEN}`
      }
    });

    return apiCall;
  }
};

// api.getUser("tylorkolbeck").then(res => console.log(res));

module.exports = api;

// status
// data.avatar_url
// data.email
