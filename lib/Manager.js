const Employee = require("./Employee");

class Manager extends Employee{
    //construct a manager with employee properties but provide an office number as well
    constructor(managerName, managerId, managerEmail, managerOfficeNumber){
        super(managerName, managerId, managerEmail);
        this.officeNumber = managerOfficeNumber;
    }

    //Return the role of the employee
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
