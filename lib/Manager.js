const Employee = require("./Employee");

class Manager extends Employee{
    constructor(managerName, managerId, managerEmail, managerOfficeNumber){
        super(managerName, managerId, managerEmail);
        this.officeNumber = managerOfficeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
