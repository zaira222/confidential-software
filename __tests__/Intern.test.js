const Intern = require('../lib/Intern.js');

test('creates a Intern profile', () => {
    const intern = new Intern('Lupe', '3', 'l3@yahoo.com', 'Loyola');

    expect(intern.name).toBe('Lupe');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('l3@yahoo.com');
    expect(intern.school).toBe('Loyola');
    

});