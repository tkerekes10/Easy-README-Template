// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of this application?",
    name: "title",
  },

  {
    type: "input",
    message: "Write a description of the application:",
    name: "description",
  },

  {
    type: "input",
    message: "Enter the required dependencies:",
    name: "dependencies",
  },

  {
    type: "input",
    message: "Explain how to use your application:",
    name: "usage",
  },

  {
    type: "input",
    message:
      "The default license is MIT. If this is incorrect you will need to modify this afterwards.",
    name: "license",
  },

  {
    type: "input",
    message: "How would one contribute to the application?",
    name: "contribution",
  },

  {
    type: "input",
    message: "Enter any testing information here:",
    name: "test",
  },

  {
    type: "input",
    message:
      "Add an email address that people can reach out to regarding questions:",
    name: "emailAddress",
  },

  {
    type: "input",
    message: "Questions",
    name: "questions",
  },
];

//Using a template literal to make the template for the README
const markdownTemplate = (input) => {
  return `# ${input.title}

  ## Descripton
  
  ${input.description}

  ## Table of Contents

  * [Description](#Description)
  * [Table Of Contents](#table-of-contents)
  * [Installation](#Installation)
  * [Usage Instructions](#usage-instructions)
  * [License](#License)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Testing Instructions](#testing-instructions)
  * [Questions?](#questions)
    
  ## Installation

  ***
      
  ### Dependencies:  
  The following dependencies are required for use:  
 * ${input.dependencies}  
  
  ##  Usage instructions  
***
    
  ${input.usage} 
    
  ##  Contribution Guidelines  
***
    
  ${input.contribution}
    
  ##  Testing Instructions  
  ***
    
  ${input.test}  
    
  ##  License
  ***
      
  This project is covered under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) license.  
    
    
  ##  Questions?  
  ***
  
  If you have any questions reach out to ${input.emailAddress}


  `;
};

// Using the inquirer library to prompt the question in the CLI
inquirer.prompt(questions).then((response) => {
  const readmeFinal = markdownTemplate(response);
  console.log(readmeFinal);

  //Using the fs library to create the markdown file with the filled in template
  fs.appendFile("README.md", readmeFinal, (err) =>
    err
      ? console.error(err)
      : console.log("Markdown File was created successfully!")
  );
});
