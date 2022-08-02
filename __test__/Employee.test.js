const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('', null, '', 'Employee');

  expect(employee.name).toBe('');
  expect(employee.id).toEqual(null);
  expect(employee.email).toBe('');
  expect(employee.role).toBe('Employee');
});