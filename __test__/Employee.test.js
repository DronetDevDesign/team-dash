const Employee = require('../lib/Employee.js');

test('creates an employees object', () => {
  const employee = new Employee('');

  expect(employee.name).toBe('');
  expect(employee.id).toEqual(Number);
  expect(employee.email).toBe('');
});