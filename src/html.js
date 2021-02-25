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
    <main>\n`;

let htmlTemp2 = 
`\n</main>
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
 <script src="./page.js"></script>
 </body>
 </html>`;

function addManagerCard(name, id, email, officeNumber) {
    htmlTemp1 += `\n<div class="card">
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

function addInternCard(name, id, email, school) {
    htmlTemp1 += `\n<div class="card">
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

function addEngineerCard(name, id, email, github) {
    
  htmlTemp1 += `\n<div class="card">
      <div class="cardhead">
        <h3>Engineer</h3>
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

function finalHtml() {
  return htmlTemp1 + htmlTemp2;
};

module.exports = {htmlTemp1, htmlTemp2, addManagerCard, addEngineerCard, addInternCard, finalHtml};