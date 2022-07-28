const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
  const engineer = new Engineer('');

  expect(engineer.name).toBe('');
  expect(engineer.id).toEqual(Number);
  expect(engineer.email).toBe('');
  expect(engineer.role).toBe('engineer');

  expect(engineer.data).toEqual(
  expect.arrayContaining([expect.any(Object)])
  );
});

jest.mock('../lib/Employee');