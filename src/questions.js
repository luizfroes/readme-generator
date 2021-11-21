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
        value: "AGPLv3",
      },
      {
        name: "GNU GPLv3",
        value: "GPLv3",
      },
      {
        name: "GNU LGPLv3",
        value: "LGPLv3",
      },
      {
        name: "Mozilla Public License 2.0",
        value: "Mozilla-2.0",
      },
      {
        name: "Apache License 2.0",
        value: "Apache-2",
      },
      {
        name: "MIT License",
        value: "MIT",
      },
      {
        name: "Boost Software License 1.0",
        value: "Boost-1.0",
      },
      {
        name: "The Unlicense",
        value: "Unlicense",
      },
    ],
  },
];

const instalQuestion = [
  {
    type: "input",
    name: "installation",
    message: "Please add a step to install your project?",
  },
];

const usageQuestion = [
  {
    type: "input",
    name: "usage",
    message: "Please add a step of how to use your application?",
  },
];

const testQuestion = [
  {
    type: "input",
    name: "test",
    message: "Please add a step to test your application?",
  },
];

module.exports = {
  mainQuestions,
  instalQuestion,
  usageQuestion,
  testQuestion,
};
