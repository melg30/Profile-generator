const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const generateHTML = require("./generateHTML");

const questions = [
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    choices: [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
      "hotpink",
      "teal"
    ],
    name: "favorite_color"
  }
];

function writeToFile(fileName, data) {}

function init() {}

init();
