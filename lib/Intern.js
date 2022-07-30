const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    // this.role = 'Intern';
    this.school = school;
  }
  getSchool() { // use for each one
    return 'Intern';
  };
}

module.exports = Intern;