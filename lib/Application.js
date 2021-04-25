
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const { choices } = require('yargs');

class Application{
    constructor(){
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    //Enter the team manager’s name, employee ID, email address, and office number
    promptManager(){
        console.log("\nWelcome to team builder!");

        return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the name of the team manager:",
                validate: answer => {
                    if(!answer){ 
                        return "Please enter a valid name."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter the id of the team manager:",
                validate: answer => {
                    if(!answer || isNaN(answer)){ 
                        return "Please enter a valid id."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter the email of the team manager:",
                validate: answer => {
                    if(!answer || !answer.includes('@') || !answer.includes('.')){ 
                        return "Please enter a valid email."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the office number of the team manager:",
                validate: answer => {
                    if(!answer || isNaN(answer)){ 
                        return "Please enter a valid office number."; 
                    }

                    return true; 
                }
            },
        ])
        .then(input => {
            this.manager = new Manager(input.name, input.id, input.email, input.officeNumber);

            this.addNewEmployee();
        });
    }

    //I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    addNewEmployee(){
        console.log("");

        return inquirer
        .prompt(
            {
                type: "list",
                name: "nextEmployee",
                message: "Add another team member or finish constructing your team.",
                choices: ["Engineer", "Intern", "Finalize Team"]
            }
        )
        .then(answer => {
            switch(answer.nextEmployee){
                case "Engineer":
                    this.promptEngineer();
                    break;
                case "Intern":
                    this.promptIntern();
                    break;
                case "Finalize Team":
                    console.log("Team has been finalized.");
                    console.log(this.manager);
                    console.log(this.engineers);
                    console.log(this.interns);
                    break;
            }
        });
    }

    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    promptEngineer(){
        return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the name of the engineer:",
                validate: answer => {
                    if(!answer){ 
                        return "Please enter a valid name."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter the id of the engineer:",
                validate: answer => {
                    if(!answer || isNaN(answer)){ 
                        return "Please enter a valid id."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter the email of the engineer:",
                validate: answer => {
                    if(!answer || !answer.includes('@') || !answer.includes('.')){ 
                        return "Please enter a valid email."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "github",
                message: "Enter the GitHub username of the engineer:",
                validate: answer => {
                    if(!answer){ 
                        return "Please enter a valid GitHub username."; 
                    }

                    return true; 
                }
            }
        ])
        .then(input => {
            this.engineers.push(new Engineer(input.name, input.id, input.email, input.github));
            
            this.addNewEmployee();
        });
    }

    //I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    promptIntern(){
        return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the name of the intern:",
                validate: answer => {
                    if(!answer){ 
                        return "Please enter a valid name."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter the id of the intern:",
                validate: answer => {
                    if(!answer || isNaN(answer)){ 
                        return "Please enter a valid id."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter the email of the intern:",
                validate: answer => {
                    if(!answer || !answer.includes('@') || !answer.includes('.')){ 
                        return "Please enter a valid email."; 
                    }

                    return true; 
                }
            },
            {
                type: "input",
                name: "school",
                message: "Enter the school the intern is attending:",
                validate: answer => {
                    if(!answer){ 
                        return "Please enter a valid school."; 
                    }

                    return true; 
                }
            }
        ])
        .then(input => {
            this.interns.push(new Intern(input.name, input.id, input.email, input.school))

            this.addNewEmployee();
        });
    }

    getManager(){
        return this.manager;
    }

    getEngineers(){
        return this.engineers;
    }

    getInterns(){
        return this.interns;
    }
}

module.exports = Application;