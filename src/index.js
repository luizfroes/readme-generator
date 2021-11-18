//import inquirer
const inquirer = require("inquirer");

//import fs
const fs = require("fs");

// import util
const util = require("./util");

//import generate
const { generateReadme } = require("./generate");

// import questions
const {
  mainQuestions,
  instalQuestion,
  usageQuestion,
  testQuestion,
} = require("./questions");

const init = async () => {
  // prompt the mainQuestions using inquirer to get answers
  const answers = await inquirer.prompt(mainQuestions);

  // get other answers
  let instalAnswer;
  let usageAnswer;
  let testAnswer;

  if (answers.hasInstallation) {
    instalAnswer = await inquirer.prompt(instalQuestion);
  }

  if (answers.hasUsage) {
    usageAnswer = await inquirer.prompt(usageQuestion);
  }

  if (answers.hasTest) {
    testAnswer = await inquirer.prompt(testQuestion);
  }

  // generate Readme based on answers
  const readme = generateReadme(answers, instalAnswer, usageAnswer, testAnswer);

  console.log(readme);

  // write readme generated to a file
  //writeToFile("SAMPLE_README.md", readme);
};

init();
