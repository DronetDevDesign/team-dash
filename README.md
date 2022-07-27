# team-dash
An easy to use dashboard showing an employers team

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           

notes: MUST HAVE--

Employee parent class must have:

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:

officeNumber

getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:

school

getSchool()

getRole() // Overridden to return 'Intern'

Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.