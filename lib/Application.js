//Prompt team members for their information
//Enter the team manager’s name, employee ID, email address, and office number
//After adding the manager, I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Application{
    constructor(){
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    promptManager(){
        inquirer
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
            }
        ])
        .then(input => {
            this.manager = new Manager(input.name, input.id, input.email, input.officeNumber);
            console.log(this.manager);
        });
    }
}

module.exports = Application;