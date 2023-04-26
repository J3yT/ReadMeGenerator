import inquirer from 'inquirer';
import fs from "fs/promises";

let {description, size} = await inquirer
  .prompt([
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project",
      },
      {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Apache', 'Boost', 'BSD'],
        filter(val) {
          return val.toLowerCase();
        },
      },
  ])

  let readmeText = `# Project Description
  ${description}


  ## A second-level heading

  ${generateLicense(size)}
  ### A third-level heading

  `
// 
  fs.writeFile("README.md", readmeText)


  function generateLicense(license){
    console.log(license);
    
    if(license === "apache"){

      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }


    return ``
  }
 