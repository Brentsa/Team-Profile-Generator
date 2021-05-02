const Employee = require('../lib/Employee');

class Intern extends Employee{
    //construct an intern with employee properties but provide a school as well
    constructor(internName, internId, internEmail, internSchool){
        super(internName, internId, internEmail);
        this.school = internSchool;
    }

    //Return the school of the intern
    getSchool(){
        return this.school;
    }

    //Return the role of the employee
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
