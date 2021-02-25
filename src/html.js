let htmlTemp1 = 
`<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Contact cards</title>
    <link rel="stylesheet" href="style.css">
 </head>
 <body>
    <header>
        <h2>Team Contact Info</h2>
    </header>
    <main>`;

let htmlTemp2 = 
`</main>
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
 <script src="./page.js"></script>
 </body>
 </html>`;

function buildManagerCard(name, id, email, officeNumber) {
    `<div class="card">
      <div class="cardhead">
        <h3>Manager</h3>
      </div>
      <div class="cardbody">
        <ul class="cardinfo">
            <li>Name: ${name}</li>
            <li>ID: ${id}</li>
            <li>Email: <a href="#">${email}</a></li>
            <li>Office: ${officeNumber}</li>
        </ul>
      </div>
    </div>`
};

function buildInternCard(name, id, email, school) {
    `<div class="card">
      <div class="cardhead">
        <h3>Intern</h3>
      </div>
      <div class="cardbody">
        <ul class="cardinfo">
            <li>Name: ${name}</li>
            <li>ID: ${id}</li>
            <li>Email: <a href="#">${email}</a></li>
            <li>School: ${school}</li>
        </ul>
      </div>
    </div>`
};

function buildEngineerCard(name, id, email, github) {
    `<div class="card">
      <div class="cardhead">
        <h3>Role</h3>
      </div>
      <div class="cardbody">
        <ul class="cardinfo">
            <li>Name: ${name}</li>
            <li>ID: ${id}</li>
            <li>Email: <a href="#">${email}</a></li>
            <li>Github: <a href="#">${github}</a></li>
        </ul>
      </div>
    </div>`
};

module.exports = {htmlTemp1, htmlTemp2, buildManagerCard, buildEngineerCard, buildInternCard};