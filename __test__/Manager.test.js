const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a manager object', () => {
  const manager = new Manager('');

  expect(manager.name).toBe('');
  expect(manager.id).toEqual(Number);
  expect(manager.email).toBe('');

  expect(manager.data).toEqual(
  expect.arrayContaining([expect.any(Object)])
  );
})

jest.mock('../lib/Employee');

// console.log(new Employee());