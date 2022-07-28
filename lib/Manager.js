const Employee = require('../lib/Employee');

function Manager(name = '') {
  this.data = [new Employee('employee'), new Employee()];

  this.name = name;
  this.id = Number;
  this.email = '';
  this.role = 'manager'; 
}

module.exports = Manager;