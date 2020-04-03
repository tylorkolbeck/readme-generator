const fs = require("fs")
const path = require("path")
const util = require("util")

const writeFile = util.promisify(fs.writeFile)

const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquire = require("./inquire.js")

function init() {
  inquire()
    .then(answers => generateMarkdown(answers))
    .then(([filename, markdown]) => writeFile(`${filename}.md`, markdown))
    .catch(error =>
      error.isTtyError
        ? console.log("Could not render in current environment.")
        : console.log("Something went wrong", error)
    )
}

init()
