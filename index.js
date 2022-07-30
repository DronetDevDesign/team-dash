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

renderIntern = (internData) => {
  return inquire.prompt([
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
  ]);
}

askManager = (questions) => {
  //pass an array of questions to enquirer
  inquirer.prompt(questions)
    .then(answerObject => {
      const choice = answerObject.confirmAddEmployee[0];
      console.log(choice);
      if (choice === 'Engineer') {
        renderEngineer()
          .then((engineerAnswers) => {
            console.log(engineerAnswers);
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
            employeeArray.push(engineer);
            /**
             * We're mapping through an array of contrusctor objects
             * -- the iteration we are currently in is a Engineer object, and
             * -- we want to add certain things from this Engineer in a literal string
             * return `This engineer named ${obj.name} likes banana pudding`
             * 
             * 
             * 
             */
          })
          .then(() => askManager(questions))
          .catch((err) => {
            throw err;
          })
      }
      if (choice === 'Exit') {
        writeToFile('./dist/index.html', employeeArray);
      }
    }).catch((err) => {
      throw err;
    });
  //then check the answers for which role we need to render
  //if Engineer, then renderEngineer, and process answers
  //-- add answers for this role into our overall data object array for all
  //-- the roles we need to generate a string for
  //if Intern
  // -- process the same way as Engineer, but for intern
  //if Exit
  // -- get the data object with all the role properties, and initialize our generate with this data

}

// function to initialize app
function init() {
  renderManager()
    .then((managerAnswers) => {
      console.log(managerAnswers);
      const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
      employeeArray.push(manager);
      return true;
    }).then(() => {
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
    }).catch((error) => { throw error;})
  
  return;
  /*
  // .then((answers) => {
  //   console.log(answers);
  //   const mainManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  //   employeeArray.push(mainManager);
  //   console.log(employeeArray[0].getRole());
  //   inquirer.prompt({
  //     type: 'checkbox',
  //     name: 'confirmAddEmployee',
  //     message: "Please choose Engineer, Intern or Exit to finished building your team?",
  //     choices: [
  //       "Engineer",
  //       "Intern",
  //       "Exit"
  //     ],
  //   })
  //     .then((data) => {
  //       console.log(data)
  //       if (data.engineerData === 'Engineer') {
  //         renderEngineer(engineerData);
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       if (data.internData === 'Intern') {
  //         renderIntern(internData);
  //       }
  //     })
    writeToFile('./dist/index.html', answers);
  // })
  // .catch((error) => {
  //   if (error.isTypeError) {
  //     throw new Error('TypeError' + error.message);
  //   } else {
  //     throw new Error(error);
  //   }
  // }); */
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

