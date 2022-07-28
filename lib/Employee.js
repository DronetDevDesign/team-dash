function Employee(name = '') {
  this.name = name;
  this.id = Number;
  this.email = '';
  this.role = '';

  // this.data = [new Employee('employee'), new Employee()];

  Employee.prototype.getName = function() {
    return {
      name: this.name.length
    };
  };

   Employee.prototype.getId = function() {
    return {
      id: this.id
    };
  };

   Employee.prototype.getEmail = function () {
    return {
      email: this.email
    };
  };

   Employee.prototype.getRole = function() {
    return {
      role: this.role
    };
  };
}

module.exports = Employee;

// MUST HAVE: - name - id - email - getName() - getId() - getEmail() - getRole()-returns 'Employee'