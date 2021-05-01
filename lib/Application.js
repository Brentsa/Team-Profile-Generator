
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const fs = require('fs');

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
                    
                    //console.log(this.manager);
                    //console.log(this.engineers);
                    //console.log(this.interns);
                    
                    this.writeFile()
                    .then(err =>{
                        if(err.ok){
                            console.log(err.message);
                        }
                        else{
                            alert("Error writing file.");
                        }
                    });

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

    generateTeamHTML(){
        var returnHTML = [];

        returnHTML.push(
            `<div class="m-2">
                <div class="card shadow">
                    <div class="card-header bg-success text-white">
                        <h1 class="card-title">${this.manager.name}</h1>
                        <h2 class="card-title"><i class="bi bi-briefcase-fill"></i> ${this.manager.getRole()}</h2>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${this.manager.id}</li>
                            <li class="list-group-item">Email: ${this.manager.email}</li>
                            <li class="list-group-item">Office Number: ${this.manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        );

        this.engineers.forEach(engineer => {
            returnHTML.push(
                `<div class="m-2">
                    <div class="card shadow">
                        <div class="card-header bg-primary text-white">
                            <h1 class="card-title">${engineer.name}</h1>
                            <h2 class="card-title"><i class="bi bi-tools"></i> ${engineer.getRole()}</h2>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush border">
                                <li class="list-group-item">ID: ${engineer.id}</li>
                                <li class="list-group-item">Email: ${engineer.email}</li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            );
        });

        this.interns.forEach(intern =>{
            returnHTML.push(
                `<div class="m-2">
                    <div class="card shadow">
                        <div class="card-header bg-info text-white">
                            <h1 class="card-title">${intern.name}</h1>
                            <h2 class="card-title"><i class="bi bi-pencil-square"></i> ${intern.getRole()}</h2>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush border">
                                <li class="list-group-item">ID: ${intern.id}</li>
                                <li class="list-group-item">Email: ${intern.email}</li>
                                <li class="list-group-item">School: ${intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            );
        });

        return returnHTML.join("");
    }

    returnHTML(){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta3/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
            
            <title>Team Profile</title>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row mb-4">
                    <div class="col py-3 bg-primary bg-gradient text-white text-center">
                        <h1 class="display-1">My Developer Team</h1>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div id="member-container" class="col-8 d-flex flex-wrap justify-content-center">
                        ${this.generateTeamHTML()}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    }

    writeFile(){
        return new Promise((resolve, reject) =>{
            fs.writeFile('./dist/index.html', this.returnHTML(), err =>{
                if(err){
                    reject(err);
                    return;
                }
                else{
                    resolve({
                        ok: true,
                        message: "HTML file generated"
                    })
                }
            });
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