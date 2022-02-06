const Engineer = require('../lib/Engineer.js');

test('creates a engineer profile', () => {
    const engineer = new Engineer('Jose', '2', 'j@yahoo.com', 'j02');
    

    expect(engineer.name).toBe('Jose');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toBe('j@yahoo.com');
    expect(engineer.github).toBe('j02');
    

});