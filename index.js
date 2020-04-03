const fs = require("fs")
const path = require("path")
require("dotenv").config()
const util = require("util")
const moment = require("moment")
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquire = require("./inquire.js")

const writeFile = util.promisify(fs.writeFile)

async function init() {
  let answers = await inquire()

  let { data } = await api.getUser(answers.username)

  let markdown = generateMarkdown({
    ...answers,
    email: data.email,
    avatar: data.avatar_url,
  })

  await writeFile(
    `${
      answers.title
        ? answers.title
        : `${moment().format("MM-DD-YYYY-h:mm:ss")}-markdown`
    }.md`,
    markdown
  )
    .then(() => console.log("write complete"))
    .catch((err) => console.log("Error", err))
}

init()
