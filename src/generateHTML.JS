const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
  const generateManager = () => { 
    new Employee(Name, id, email); {
      Name = Manager.Name;
      id = Manager.id;
      email = Manager.email;
    }
    new Manager  (Name, id, email, officeNumber); {
      Name = Manager.Name;
      id = Manager.id;
      email = Manager.email;
      officeNumber = Manager.officeNumber;
      

     
    }
    return `
<div class="row">
<div class ="col-sm-4">
<div class ="card" style ="width: 15rem;">
  <div class="card-body">
      <h2 class="card-title-Position"> ${Manager.Name}</h2>
      <h3 class="firstname">Name: ${Manager.name}</h3>
      <hr>
  </div
   
  <ul class="information list-group-flush">
      <li class="list-group-item-id">Id: ${Manager.id}</li>
      <li class="list-group-item-office">Office Number: ${Manager.officeNumber}</li>
  </ul>
 
  <div class="card-body-reach">
   <hr>
   <a class = "email" href= "mailto:${Manager.email}"> Email: ${Manager.email}</a>
</div>
</div>
</div>
  
  `;
}

const generateEngineer = () => { 
  new Employee(Name, id, email); {
    Name = Engineer.Name;
    id = Engineer.id;
    email = Engineer.email;
  }
  new Engineer(Name = ' ', id = ' ', email = ' ', github = ' '); {
    Name = Engineer.Name;
    id = Engineer.id;
    email = Engineer.email;
    github = Engineer.github;

   
  }
  return `
<div class= "col-sm-4">
<div class="card" style="width: 15rem;">
<div class="card-body">
    <h2 class="Position"> ${Engineer.Name}</h2>
    <h3 class="firstname"> ${Engineer.name}</h3>
    <hr>
</div>
<ul class="information list-group-flush">
    <li class="id">Id: ${Engineer.id}</li>
</ul>

<div class="reach">
<hr>
    <a class = "email" href= "mailto:${Engineer.email}">Email: ${Engineer.email}</a><br>

<a class= "github" href="https://github.com/${github}" target="_blank">Github: ${github}</a>
</div>
</div>
</div>

`;
}
  
const generateIntern  = () => {
  new Employee(Name, id, email); {
    Name = Intern.Name;
    id = Intern.id;
    email = Intern.email;
  }
  new Intern(Name = ' ', email = ' ', id = ' ', school = ' '); {
    name = Intern.ame;
    id = Intern.id;
    email = Intern.email;
    school = Intern.school;
   
  }
  return `
<div class= "col-sm-4">
<div class="card" style="width: 15rem;">
<div class="card-body">
    <h2 class="Position"> ${Intern.Name}</h2>
    <h3 class="firstname"> ${Intern.name}</h3>
    <hr>
</div>

<ul class="information list-group-flush">
    <li class="id">Id: ${Intern.id}</li>
    <li class="school">School: ${Intern.school}</li>
</ul>
<div class="reach">
<hr>
    <a class = "email" href= "mailto:${Intern.email}">Email: ${Intern.email}</a>
</div>
</div>
</div>

`;
}
  
module.exports = TeamData => {
const { Manager, name, Engineer, github, ... div } = TeamData;
return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title> Confidential Software </title>
  </head>
  <body>
  <header>
    <h1>My Team</h1>
  </header>
  
  ${generateManager()}
  ${generateEngineer()}
  ${generateIntern()}
        </body>
    </html>
  `;

 }
  