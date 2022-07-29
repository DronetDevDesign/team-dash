const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require('./src/generateMarkdown');

// array of questions when prompted
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team manager's name!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's ID? (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's ID!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email address!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the team manager's office number? (Required)",
    validate: (officeNumberInput) => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log("Please enter the team manager's office number!");
        return false;
      }
    },
  },
  // {
  //   type: 'checkbox',
  //   name: 'employee',
  //   message: "Please choose Engineer, Intern or Exit to finished building your team?",
  //   choices: [
  //     "Engineer",
  //     "Intern",
  //     "Exit"  
  //   ],
  // },
]

// function that writes index.html file
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