const Manager = require('../lib/Manager.js');

test('creates a manager profile', () => {
    const manager = new Manager('Dulce', '4', 'd4@yahoo.com', '302');

    expect(manager.name).toBe('Dulce');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('d4@yahoo.com');
    expect(manager.officeNumber).toBe('302');

    

});