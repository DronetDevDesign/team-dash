const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require('./src/generateMarkdown');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];

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

renderEngineer = (engineerData) => {
  inquire.prompt([
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
      name: 'officeNumber',
      message: "What is the engineer's gitHub name? (Required)",
      validate: (githubNameInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter the engineer's gitHub name!");
          return false;
        }
      },
    },
  ])
}

renderIntern = (internData) => {
  inquire.prompt([
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
      name: 'officeNumber',
      message: "What is the intern's school name? (Required)",
      validate: (schoolNameInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter the intern's school name!");
          return false;
        }
      },
    },
  ])
}

// function to initialize app
function init(engineerData) {
  inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers);
      const mainManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employeeArray.push(mainManager);
      console.log(employeeArray[0].getRole());
      inquirer.prompt({
        type: 'checkbox',
        name: 'confirmAddEmployee',
        message: "Please choose Engineer, Intern or Exit to finished building your team?",
        choices: [
          "Engineer",
          "Intern",
          "Exit"
        ],
      })
        .then((data) => {
          console.log(data)
          if (data.engineerData === 'Engineer') {
            renderEngineer(engineerData);
          }
        })
        .then((data) => {
          console.log(data)
          if (data.internData === 'Intern') {
            renderIntern(internData);
          }
        })
      // writeToFile('./dist/index.html', answers);
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

// choiceData = (choice) => {
//   let selectedChoice = '';
//   if ('Intern') {
//     return selectedChoice.data;
//   } else if ('Engineer') {
//     return selectedChoice.data;
//   } else {
//     selectedChoice = `Office number: ${data}`;
//   }
//   return selectedChoice;
// }

