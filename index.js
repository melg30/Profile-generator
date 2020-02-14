const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const generateHTML = require("./generateHTML");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "list",
      message: "What is your favorite color?",
      choices: ["green", "blue", "pink", "red"],
      name: "color"
    }
  ])
  .then(response => {
    //Define the Username & Color
    usernameInput = response.username;
    console.log(usernameInput);

    colorInput = response.color;
    console.log(colorInput);

    //Call functions
    stars(usernameInput);
    gitHub(usernameInput);
  });

function writeToFile(fileName, data) {}

function init() {}

init();
