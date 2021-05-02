const Employee = require("./Employee");

class Engineer extends Employee{
    //construct an engineer with employee properties but provide a github username as well
    constructor( engineerName, engineerId, engineerEmail, engineerGithub){
        super(engineerName, engineerId, engineerEmail);
        this.github = engineerGithub;
    }

    //return the github username of the engineer
    getGithub(){
        return this.github;
    }

    //return the role of the engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
