const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a manager object', () => {
  const manager = new Manager('');

  expect(manager.name).toBe('');
  expect(manager.id).toEqual(null);
  expect(manager.email).toBe('');
  expect(manager.role).toBe('Manager');
});
