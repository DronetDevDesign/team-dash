const Employee = require('../lib/Employee');

function Intern(name = '') {
  this.data = [new Employee('employee'), new Employee()];

  this.name = name;
  this.id = Number;
  this.email = '';
  this.role = 'intern'; 
}

module.exports = Intern;