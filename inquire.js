const inquirer = require("inquirer");

const inquire = () => {
  return inquirer.prompt([
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
  ]);
};

module.exports = inquire;
