const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('Instantiate an Intern', () =>{
    const intern = new Intern('Sean', 12345, 'seanbrent5@live.ca', 'University of Toronto');

    expect(intern.name).toEqual(expect.any(String));
    
    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toContain('@');
    expect(intern.email).toContain('.');

    expect(intern.school).toEqual(expect.any(String));
});

test('Return the school of the intern', () =>{
    const intern = new Intern('Sean', 12345, 'seanbrent5@live.ca', 'University of Toronto');

    expect(intern.getSchool()).toEqual(intern.school);
});

test('Return the role title of the intern', () =>{
    const intern = new Intern('Sean', 12345, 'seanbrent5@live.ca', 'University of Toronto');

    expect(intern.getRole()).toEqual("Intern");
});