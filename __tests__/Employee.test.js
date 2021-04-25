const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Instantiate an Employee', () =>{
    const employee = new Employee('Sean', 12345678, 'seanbrent5@live.ca');

    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
    expect(employee.email).toContain('.');
});

test('Return the name of the employee', () =>{
    const employee = new Employee('Sean', 12345678, 'seanbrent5@live.ca');

    expect(employee.getName()).toEqual(employee.name);
});

test('Return the id of the employee', () =>{
    const employee = new Employee('Sean', 12345678, 'seanbrent5@live.ca');

    expect(employee.getId()).toEqual(employee.id);
});

test('Return the email of the employee', () =>{
    const employee = new Employee('Sean', 12345678, 'seanbrent5@live.ca');

    expect(employee.getEmail()).toEqual(employee.email);
});

test('Return the role title of the employee', () =>{
    const employee = new Employee('Sean', 12345678, 'seanbrent5@live.ca');

    expect(employee.getRole()).toMatch('Employee');
});