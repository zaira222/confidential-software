const Employee = require('../lib/Employee.js');

test('creates a employee profile', () => {
    const employee = new Employee('Maria', '1', 'a@yahoo.com');

    expect(employee.name).toBe('Maria');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('a@yahoo.com');
    

});

