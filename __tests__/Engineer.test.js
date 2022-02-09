const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Jose', '2', 'j@yahoo.com', 'j02');

test('creates a engineer profile', () => {
    

    expect(engineer.Name).toBe('Jose');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toBe('j@yahoo.com');
    expect(engineer.github).toBe('j02');
    

});
