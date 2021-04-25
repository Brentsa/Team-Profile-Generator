const { test, expect } = require("@jest/globals");
const Manager = require('../lib/Manager');

test('Instantiate a Manager', () =>{
    const manager = new Manager('Sean', 12345, 'seanbrent5@live.ca', 117);

    expect(manager.name).toEqual(expect.any(String));

    expect(manager.id).toEqual(expect.any(Number));

    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toContain('@');
    expect(manager.email).toContain('.');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Return the role title of the manager', () =>{
    const manager = new Manager('Sean', 12345, 'seanbrent5@live.ca', 117);

    expect(manager.getRole()).toMatch("Manager");
});