const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(name, id, email, role, schoolName) {
    super(name, id, email);
    this.role = 'Intern';
    this.school = schoolName;
  }
  getSchool() { // use for each one
    return this.school;
  };
}

module.exports = Intern;