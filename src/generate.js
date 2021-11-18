const fs = require("fs");

const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=<${answers.license}>&message=<License>&color=<Green>)\n
  `;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents

  - [Description](#description)
  ${answers.hasInstallation ? "- [Installation](#installation)" : ""}
  ${answers.hasUsage ? "- [Usage](#usage)" : ""}
  ${answers.hasTests ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#question)`;
};

const generateDescription = (answers) => {
  return `## Description

  ${answers.description}`;
};

const generateInstallation = (instalAnswer) => {
  return `## Installation

  Run the following script to instal the packages required for the application:\n     
  \`\`\`
  ${instalAnswer.installation}
  \`\`\`\n`;
};

const generateUsage = (usageAnswer) => {
  return `## Usage 

  To use the application run the following script:\n  
        
  \`\`\`
  ${usageAnswer.usage}
  \`\`\`\n`;
};

const generateTests = (testAnswer) => {
  return `## Tests

  To use the application run the following script:

  \`\`\`
  ${testAnswer.test}
  \`\`\`\n`;
};

const generateContributing = (answers) => {
  return `## Contributing 

  ${answers.contributing}`;
};

const generateQuestions = (answers) => {
  return `## Questions

  If you have any question or suggestion, please fell free to get in touch with me by:
        
  Email: [${answers.email}](mailto:${answers.email})
        
  GitHub: ${answers.github}`;
};

const generateReadme = (answers, instalAnswer, usageAnswer, testAnswer) => {
  return `${generateTitle(answers)}\n
  ${generateTableOfContents(answers)}\n
  ${generateDescription(answers)}\n 
  ${answers.hasInstallation ? generateInstallation(instalAnswer) : ""}\n
  ${answers.hasUsage ? generateUsage(usageAnswer) : ""}\n
  ${answers.hasTest ? generateTests(testAnswer) : ""}\n
  ${generateContributing(answers)}\n
  ${generateQuestions(answers)}\n
  `;
};

module.exports = {
  generateReadme,
};
