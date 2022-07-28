const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an intern object', () => {
  const intern = new Intern('');

  expect(intern.name).toBe('');
  expect(intern.id).toEqual(Number);
  expect(intern.email).toBe('');
  expect(intern.role).toBe('intern');

  expect(intern.data).toEqual(
  expect.arrayContaining([expect.any(Object)])
  );
});

jest.mock('../lib/Employee');