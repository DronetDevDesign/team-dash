const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('');

  expect(employee.name).toBe('');
  expect(employee.id).toEqual(Number);
  expect(employee.email).toBe('');
  expect(employee.role).toBe('');
});

test('gets employee data as an object', () => {
  const employee = new Employee('');

  expect(employee.getName()).toHaveProperty('name');
  expect(employee.getId()).toHaveProperty('id');
  expect(employee.getEmail()).toHaveProperty('email');
  expect(employee.getRole()).toHaveProperty('role');
});

// test('gets employee data', () => {
//   const employee = new Employee('');

//   expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));  
// });