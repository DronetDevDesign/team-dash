const Employee = require('../lib/Employee');
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // this.role = 'Manager';
    this.officeNumber = officeNumber;
  }
  // use for each one
  getRole() {
    return 'Manager';
  };
}

module.exports = Manager;