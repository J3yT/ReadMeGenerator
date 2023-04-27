import inquirer from "inquirer";
import fs from "fs/promises";

let { title, description, installation, usage, license, contributing, tests } = await inquirer.prompt([
  
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like for your project?",
    choices: ["Apache", "Boost", "BSD"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Include guidelines on how you would like other developers to contribute to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for your application and provide examples on how to run them here:",
  },
]);

let readmeText = 

`# ${title}

## Description
${description}

## Table of Contents

## Installation
${installation}

## Usage
${usage}
 
## License
License the application is covered under: ${generateLicense(license)}

## How to Contribute
${contributing}

## Tests
${tests}

## Questions

`;

fs.writeFile("README.md", readmeText);

function generateLicense(license) {

  if (license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
}
