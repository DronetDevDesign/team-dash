const Employee = require('../lib/Employee');

function Engineer(name = '') {
  this.data = [new Employee('employee'), new Employee()];

  this.name = name;
  this.id = Number;
  this.email = '';
  this.role = 'engineer'; 
}

module.exports = Engineer;