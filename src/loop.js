const inquirer = require("inquirer");

const loopInstallationQuestions = async (instalQuestion) => {
  let inProgress = true;

  const instalAnswers = [];

  while (inProgress) {
    const answers = await inquirer.prompt(instalQuestion);
    instalAnswers.push(answers.installation);
    const { quit } = await inquirer.prompt({
      type: "confirm",
      message: "Does your project has another installation step?",
      name: "quit",
    });

    if (!quit) {
      inProgress = false;
    }
  }

  return instalAnswers;
};

const loopUsageQuestions = async (usageQuestion) => {
  let inProgress = true;

  const usageAnswers = [];

  while (inProgress) {
    const answers = await inquirer.prompt(usageQuestion);
    usageAnswers.push(answers.usage);
    const { quit } = await inquirer.prompt({
      type: "confirm",
      message: "Does your project has another usage step?",
      name: "quit",
    });

    if (!quit) {
      inProgress = false;
    }
  }

  return usageAnswers;
};

const loopTestQuestions = async (testQuestion) => {
  let inProgress = true;

  const testAnswers = [];

  while (inProgress) {
    const answers = await inquirer.prompt(testQuestion);
    testAnswers.push(answers.test);
    const { quit } = await inquirer.prompt({
      type: "confirm",
      message: "Please add a step to test your application?",
      name: "quit",
    });

    if (!quit) {
      inProgress = false;
    }
  }

  return testAnswers;
};

module.exports = {
  loopInstallationQuestions,
  loopUsageQuestions,
  loopTestQuestions,
};
