//import inquirer
const inquirer = require("inquirer");

//import fs
const fs = require("fs");

// declare questions
const questions = [
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
    name: "isInstallation",
    message: "Does your Project has an installation script?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation script of your project?",
  },
  {
    type: "confirm",
    name: "isUsage",
    message: "Does your Project has an usage script?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use the application??",
  },
  {
    type: "confirm",
    name: "isTest",
    message: "Does your Project has an usage script?",
  },
  {
    type: "input",
    name: "test",
    message: "How do I test the application?",
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
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
];

const generateTitle = (answers) => {
  return `# Title ![MIT](https://img.shields.io/static/v1?label=<MIT>&message=<License>&color=<Green>)
  `;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents
    
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

const generateDescription = (answers) => {
  return `## Description
    
  DESCRIPTION`;
};

const generateInstallation = (answers) => {
  return `## Installation
    
  Run the following script to instal the packages required for the application:
    
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage
    
  To use the application run the following script:
    
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests
    
  To use the application run the following script:
    
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing

  ADD TEXT HERE
    
  If you would like more info about how to contribute in this application, please fell free to get in touch with me by:

  Email: ADD TEXT HERE
  GitHub: ADD TEXT HERE`;
};

const generateLicense = (answers) => {
  return `## License
    
  ADD TEXT HERE`;
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}

  ${generateTableOfContents(answers)}
    
  ${generateDescription(answers)}
    
  ${generateInstallation(answers)}
    
  ${generateUsage(answers)}
    
  ${generateTests(answers)}
    
  ${generateContributing(answers)}
    
  ${generateLicense(answers)}
    `;
};

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = (async) => {
  // prompt the questions using inquirer
  // generate Readme based on answers
  const readme = generateReadme();

  // write readme generated to a file
  writeToFile("TEST_README.md", readme);
};

init();
