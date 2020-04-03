const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Github user?"
    },
    {
      type: "input",
      name: "title",
      message: "Project Title?"
    },
    {
      type: "input",
      name: "description",
      message: "Project Description?"
    },
    {
      type: "input",
      name: "install",
      message: "Install Command?",
      default: "npm install"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?",
      default: "npm start"
    },
    {
      type: "list",
      name: "license",
      message: "License",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "Contributing",
      message: "Contributers?"
    },
    {
      type: "input",
      name: "tests",
      message: "Tests Command?",
      default: "npm test"
    },
    {
      type: "input",
      name: "What does your user need to know to use the repo?",
      message: ""
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

const questions = [];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {}

init();
