const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(name = '') {
  super(name);
  this.role = 'Engineer';
  this.github = '';
  }
  getGitHub = () => {
    return this.github;
  }
}

module.exports = Engineer;