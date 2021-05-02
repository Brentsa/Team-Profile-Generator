//Employee class that will be the parent of other employee classifications
class Employee{
    //construct an employee with a name, id, and email
    constructor(employeeName, employeeId, employeeEmail){
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;