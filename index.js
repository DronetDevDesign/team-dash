const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require('./src/generateMarkdown');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];

// function that writes index.html file
function writeToFile(fileName) {

  fs.writeFile('./dist/index.html', generateMarkdown(employeeArray), err => {
    if (err) {
      throw new Error(err);
    }
  });
}
// Manager prompt questions:
renderManager = () => {
  return inquirer.prompt([
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
  ])
}
// Engineer prompt questions:
renderEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's ID number? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the engineer's ID number!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email address!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's gitHub name? (Required)",
      validate: (githubNameInput) => {
        if (githubNameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's gitHub name!");
          return false;
        }
      },
    },
  ]);
}
// Intern prompt questions:
renderIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's name!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID number? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the intern's ID number!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email address!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'schoolName',
      message: "What is the intern's school name? (Required)",
      validate: (schoolNameInput) => {
        if (schoolNameInput) {
          return true;
        } else {
          console.log("Please enter the intern's school name!");
          return false;
        }
      },
    },
  ]);
}

askManager = (questions) => {
  //pass an array of questions to inquirer
  inquirer.prompt(questions)
    .then(answerObject => {
      const choice = answerObject.confirmAddEmployee[0];
      console.log(choice);
      // If manager chooses to add an engineer
      if (choice === 'Engineer') {
        renderEngineer()
          .then((engineerAnswers) => {
            console.log('engineerAnswers:', engineerAnswers);
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
            employeeArray.push(engineer);
            
          })
          .then(() => askManager(questions))
          .catch((err) => {
            throw err;
          })
      }
      // If manager chooses to add an intern
      if (choice === 'Intern') {
        renderIntern()
          .then((internAnswers) => {
            console.log('internAnswers:', internAnswers);
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.schoolName)
            employeeArray.push(intern);
          })
          .then(() => askManager(questions))
          .catch((err) => {
            throw err;
          })
      }
      // If manager chooses to exit then the index.html file will be generated
      if (choice === 'Exit') {
        writeToFile('./dist/index.html');
      }
    }).catch((err) => {
      throw err;
    });
}

// function to initialize app
function init() {
  renderManager()
    .then((managerAnswers) => {
      console.log(managerAnswers);
      const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
      employeeArray.push(manager);
      return true;
    })
    .then(() => {
      askManager({
        type: 'checkbox',
        name: 'confirmAddEmployee',
        message: "Please choose Engineer, Intern or Exit to finished building your team?",
        choices: [
          "Engineer",
          "Intern",
          "Exit"
        ],
      })
    }).catch((error) => { throw error; })
  return;
}
// initialize app
init();