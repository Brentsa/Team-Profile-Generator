const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(internName, internId, internEmail, internSchool){
        super(internName, internId, internEmail);
        this.school = internSchool;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
