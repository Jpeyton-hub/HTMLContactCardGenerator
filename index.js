const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const HTML = require("./src/html");
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);
const employeeArr = [];
let htmlTemp1 = HTML.htmlTemp1;
let htmlTemp2 = HTML.htmlTemp2;


function buildHTML() {
  let manager = employeeArr.filter(e => e.getRole() == 'Manager');
  let interns = employeeArr.filter(e => e.getRole() == 'Intern');
  let engineers = employeeArr.filter(e => e.getRole() == 'Engineer');
  HTML.addManagerCard(manager[0].name, manager[0].id, manager[0].email, manager[0].officeNumber);
  for(let i = 0; i < interns.length; i++) {
    HTML.addInternCard(interns[i].name, interns[i].id, interns[i].email, interns[i].school);
  };
  for(let i = 0; i < engineers.length; i++) {
    HTML.addEngineerCard(engineers[i].name, engineers[i].id, engineers[i].email, engineers[i].github);
  };
};

function createManager() {
  console.log("Let's build your team starting with the Manager!");  
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "At what office number can the manager be found?",
        name: "officeNumber",
      },
      {
        type: "input",
        message: "What is their employee id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What kind of employee would you like to add next?",
        name: "next",
        choices: ["Intern", "Engineer", "Finished"],
      },
    ])
    .then((res) => {
      employeeArr.push(
        new Manager(res.name, res.id, res.email, res.officeNumber)
      );
      console.log(employeeArr);
      switch (res.next) {
        case "Intern":
          createIntern();
          break;

        case "Engineer":
          createEngineer();
          break;

        case "Finished":
          buildHTML();
          writeFileAsync('./dist/index.html', HTML.finalHtml());
          console.log("Team created!");
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's github profile address?",
        name: "github",
      },
      {
        type: "input",
        message: "What is their employee id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What kind of employee would you like to add next?",
        name: "next",
        choices: ["Intern", "Engineer", "Finished"],
      },
    ])
    .then((res) => {
      employeeArr.push(new Engineer(res.name, res.id, res.email, res.github));
      console.log(employeeArr);
      switch (res.next) {
        case "Intern":
          createIntern();
          break;

        case "Engineer":
          createEngineer();
          break;

        case "Finished":
          buildHTML();
          writeFileAsync('./dist/index.html', HTML.finalHtml());
          console.log("Team created!");
      }
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What school is the intern from?",
        name: "school",
      },
      {
        type: "input",
        message: "What is their employee id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What kind of employee would you like to add next?",
        name: "next",
        choices: ["Intern", "Engineer", "Finished"],
      },
    ])
    .then((res) => {
      employeeArr.push(new Intern(res.name, res.id, res.email, res.school));
      console.log(employeeArr);
      switch (res.next) {
        case "Intern":
          createIntern();
          break;

        case "Engineer":
          createEngineer();
          break;

        case "Finished":
          buildHTML();
          writeFileAsync('./dist/index.html', HTML.finalHtml());
          console.log("Team created!");
      };
    });
};

createManager()


