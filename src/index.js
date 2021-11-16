const fs = require("fs");

// declare questions
const questions = [];

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
    
  ADD TEXT HERE`;
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
