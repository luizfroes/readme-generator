//import inquirer
const inquirer = require("inquirer");

//import fs
const fs = require("fs");

// declare questions
const mainQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "confirm",
    name: "hasInstallation",
    message: "Does your Project has an installation script?",
    default: false,
  },
  {
    type: "confirm",
    name: "hasUsage",
    message: "Does your Project has an usage script?",
    default: false,
  },
  {
    type: "confirm",
    name: "hasTest",
    message: "Does your Project has an test script?",
    default: false,
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to this app?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
      {
        name: "GNU AGPLv3",
        value: "gnuA",
      },
      {
        name: "GNU GPLv3",
        value: "gnu",
      },
      {
        name: "GNU LGPLv3",
        value: "gnuL",
      },
      {
        name: "Mozilla Public License 2.0",
        value: "mozilla",
      },
      {
        name: "Apache License 2.0",
        value: "apache",
      },
      {
        name: "MIT License",
        value: "mit",
      },
      {
        name: "Boost Software License 1.0",
        value: "boost",
      },
      {
        name: "The Unlicense",
        value: "unlicense",
      },
    ],
  },
];

const instalQuestion = [
  {
    type: "input",
    name: "installation",
    message: "What is the installation script of your project?",
  },
];

const usageQuestion = [
  {
    type: "input",
    name: "usage",
    message: "How do I use the application??",
  },
];

const testQuestion = [
  {
    type: "input",
    name: "test",
    message: "How do I test the application?",
  },
];

const init = async () => {
  // prompt the mainQuestions using inquirer
  const answers = await inquirer.prompt(mainQuestions);

  console.log(answers);

  if (answers.hasInstallation) {
    const instalAnswer = await inquirer.prompt(instalQuestion);

    console.log(instalAnswer);
  }

  if (answers.hasUsage) {
    const usageAnswer = await inquirer.prompt(usageQuestion);

    console.log(usageAnswer);
  }

  if (answers.hasTest) {
    const testAnswer = await inquirer.prompt(testQuestion);

    console.log(testAnswer);
  }
  // generate Readme based on answers
  //const readme = generateReadme();

  // write readme generated to a file
  //writeToFile("TEST_README.md", readme);
};

init();
