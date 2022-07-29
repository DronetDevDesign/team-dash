const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require('./src/generateMarkdown');

// array of questions when prompted
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    },
  },
]

// function that write index.html file
function writeToFile(fileName, data) {
  console.log(data);

  fs.writeFile('./dist/index.html', generateMarkdown(data), err => {
    if (err) {
      throw new Error(err);
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('./dist/index.html', answers);
    })
    .catch((error) => {
      if (error.isTypeError) {
        throw new Error('TypeError' + error.message);
      } else {
        throw new Error(error);
      }
    });
}

// initialize app
init();