const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
  const engineer = new Engineer('');

  expect(engineer.name).toBe('');
  expect(engineer.id).toEqual(null);
  expect(engineer.email).toBe('');
  expect(engineer.role).toBe('Engineer');
});
