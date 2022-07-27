const Employee = require('../lib/Employee.js');

test('creates an employees object', () => {
  const employee = new Employee('Ron');

  expect(employee.name).toBe('Ron');
  expect(employee.id).toEqual(Number);
  expect(employee.email).toBe('');
});