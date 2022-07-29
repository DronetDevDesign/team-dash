const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(name = '') {
    super(name);
    this.role = 'Intern';
    this.school = '';
  }
  getSchool = () => {
    return this.school;
  }
}

module.exports = Intern;