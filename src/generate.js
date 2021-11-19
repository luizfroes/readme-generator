const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=<${answers.license}>&message=<License>&color=<Green>)\n
  `;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents

  - [Description](#description)
  ${answers.hasInstallation ? "- [Installation](#installation)" : ""}
  ${answers.hasUsage ? "- [Usage](#usage)" : ""}
  ${answers.hasTest ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#question)`;
};

const generateDescription = (answers) => {
  return `## Description

  ${answers.description}`;
};

const generateInstallation = (instalAnswers) => {
  return `## Installation

  Run the following script to instal the packages required for the application:\n     
  \`\`\`
  ${instalAnswers.join("\n")}
  \`\`\`\n`;
};

const generateUsage = (usageAnswers) => {
  return `## Usage 

  To use the application run the following script:\n  
        
  \`\`\`
  ${usageAnswers.join("\n")}
  \`\`\`\n`;
};

const generateTests = (testAnswers) => {
  return `## Tests

  To use the application run the following script:

  \`\`\`
  ${testAnswers.join("\n")}
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

const generateReadme = (answers, instalAnswers, usageAnswers, testAnswers) => {
  return `${generateTitle(answers)}\n
  ${generateTableOfContents(answers)}\n
  ${generateDescription(answers)}\n 
  ${answers.hasInstallation ? generateInstallation(instalAnswers) : ""}\n
  ${answers.hasUsage ? generateUsage(usageAnswers) : ""}\n
  ${answers.hasTest ? generateTests(testAnswers) : ""}\n
  ${generateContributing(answers)}\n
  ${generateQuestions(answers)}\n
  `;
};

module.exports = {
  generateReadme,
};
