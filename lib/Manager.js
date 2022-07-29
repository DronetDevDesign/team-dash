const Employee = require('../lib/Employee');
class Manager extends Employee {
  constructor(name = '') {
    super(name);
    this.role = 'Manager';
    this.officeNumber = null;
  }
}

module.exports = Manager;