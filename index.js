const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeArr = [];

function createManager() {
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
          console.log("Team created!");
      };
    });
};

createManager()

module.exports = employeeArr;
