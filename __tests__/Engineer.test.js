const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Instantiate an Engineer', () =>{
    const engineer = new Engineer('Sean', 12345, 'seanbrent5@live.ca', 'Brentsa');

    expect(engineer.name).toEqual(expect.any(String));

    expect(engineer.id).toEqual(expect.any(Number));

    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toContain('@');
    expect(engineer.email).toContain('.');

    expect(engineer.github).toEqual(expect.any(String));
});

test('Return the GitHub username of the engineer', () =>{
    const engineer = new Engineer('Sean', 12345, 'seanbrent5@live.ca', 'Brentsa');

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test('Return the role title of the engineer', () =>{
    const engineer = new Engineer('Sean', 12345, 'seanbrent5@live.ca', 'Brentsa');

    expect(engineer.getRole()).toMatch("Engineer");
});