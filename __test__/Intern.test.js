const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an intern object', () => {
  const intern = new Intern('', null, '',);

  expect(intern.name).toBe('');
  expect(intern.id).toEqual(null);
  expect(intern.email).toBe('');
  expect(intern.role).toBe('Intern');

});