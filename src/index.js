//import inquirer
const inquirer = require("inquirer");

// import util
const { writeToFile } = require("./util");

//import generate
const { generateReadme } = require("./generate");

// import questions
const {
  mainQuestions,
  instalQuestion,
  usageQuestion,
  testQuestion,
} = require("./questions");

const {
  loopInstallationQuestions,
  loopUsageQuestions,
  loopTestQuestions,
} = require("./loop");

const init = async () => {
  // prompt the mainQuestions using inquirer to get answers
  const answers = await inquirer.prompt(mainQuestions);

  // get other answers
  let instalAnswers;
  let usageAnswers;
  let testAnswers;

  if (answers.hasInstallation) {
    instalAnswers = await loopInstallationQuestions(instalQuestion);
  }

  if (answers.hasUsage) {
    usageAnswers = await loopUsageQuestions(usageQuestion);
  }

  if (answers.hasTest) {
    testAnswers = await loopTestQuestions(testQuestion);
  }
  //generate Readme based on answers
  const readme = generateReadme(
    answers,
    instalAnswers,
    usageAnswers,
    testAnswers
  );

  //write readme generated to a file
  writeToFile("SAMPLE_README.md", readme);
};

init();
