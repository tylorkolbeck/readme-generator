const fs = require("fs")
const path = require("path")
const util = require("util")

const writeFile = util.promisify(fs.writeFile)

const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquire = require("./inquire.js")

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
  // inquire()
  // .then(answers => {
  //   return answers
  // })
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
