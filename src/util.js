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
