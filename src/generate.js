const fs = require("fs");

const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=<${answers.license}>&message=<License>&color=<Green>)\n
        `;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents\n
        - [Description](#description)
        ${answers.installation ? "- [Installation](#installation)" : "\r"}
        ${answers.usage ? "- [Usage](#usage)" : "\r"}
        ${answers.tests ? "- [Tests](#tests)" : "\r"}
        - [Contributing](#contributing)
        - [License](#license)
        - [Questions](#question)\n`;
};

const generateDescription = (answers) => {
  return `## Description\n 
        ${answers.description}\n`;
};

const generateInstallation = (instalAnswer) => {
  return `## Installation\n
        Run the following script to instal the packages required for the application:\n     
        \`\`\`
        ${instalAnswer}
        \`\`\`\n`;
};

const generateUsage = (usageAnswer) => {
  return `## Usage\n    
        To use the application run the following script:\n  
        \`\`\`
        ${usageAnswer}
        \`\`\`\n`;
};

const generateTests = (testAnswer) => {
  return `## Tests\n 
        To use the application run the following script:\n  
        \`\`\`
        ${testAnswer}
        \`\`\`\n`;
};

const generateContributing = (answers) => {
  return `## Contributing\n 
        ${answers.contributing}\n`;
};

const generateQuestions = (answers) => {
  return `## Questions\n   
        If you have any question or suggestion, please fell free to get in touch with me by:\n
        Email: ${answers.email}\n
        GitHub: ${answers.github}\n`;
};

const generateReadme = (answers, instalAnswer, usageAnswer, testAnswer) => {
  return `${generateTitle(answers)}
        ${generateTableOfContents(answers)}
        ${generateDescription(answers)} 
        ${
          answers.installation
            ? generateInstallation(answers, instalAnswer)
            : "\r"
        }
        ${answers.usage ? generateUsage(answers, usageAnswer) : "\r"}
        ${answers.tests ? generateTests(answers, testAnswer) : "\r"}
        ${generateContributing(answers)}
        ${generateQuestions(answers)}
          `;
};

module.exports = {
  generateReadme,
};
