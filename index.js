const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const TeamData = [];

 const promptManager = () => {
    console.log(    `
    ============
    Manager
    ============
    
    `)
   if(!TeamData.Manager) {
       TeamData.Manager = [];
   }
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'Name',
        message: 'What is the Managers name? (Required)',
        validate: NameInput => {
            if(NameInput) {
                return true;
            } else {
                console.log('Enter Managers name.');
                return false;
            } 
        }
     },
     {
         type: 'input',
         name: 'id',
         message: 'What is the Managers employee id number? (Required)',
         validate: idInput => {
             if(idInput) {
                 return true;
             } else {
                 console.log('Enter Managers employee id number.');
                 return false;
             }
        }
     },
         {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email address? (Required)',
            validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Enter Managers email address.');
                return false;
            }
         }
     },
     {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number? (Required)',
        validate: officeNumberInput => {
            if(officeNumberInput) {
                return true;
            } else {
                console.log('Enter managers office number.');
                return false;
            }
        }
    }
    ]) .then(answer => {
        console.log(answer.Name, answer.id, answer.email, answer.officeNumber); {
        new Employee 
       new Manager (Name = answer.Name, id = answer.id, email = answer.email, officeNumber = answer.officeNumber); {
            Manager.Name = Name;
            Manager.id = id;
            Manager.email = email;
            Manager.officeNumber = officeNumber;
           
        TeamData.push(new Manager)
        return promptMenu(); 
        }
    }
})
 }
const promptMenu = () => {
    console.log(
`
================
Role
================
`);
if(!TeamData.Role) {
    TeamData.Role = [];
}
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'title',
            message: 'What position title are they? (Required)',
            choices: ['add an Engineer', 'add Intern', 'finish building my team'],
            validate: titleList => {
               if(titleList) {
                   return true;
               } else {
                   console.log('Pick the employees position or finish building your team.');
                   return false;
               }
            }
        }
    ])
    .then(answer => {
        console.log(answer.title); {
    if (answer.title === "add an Engineer") {
        return promptEngineer();
} else if (answer.title === "add Intern") {
        return promptIntern();
} else if (answer.title === "finish building my team") {
        return promptRole();
} 
        return promptMenu();
    
}
    });
}
    
const promptEngineer = () => {
    console.log(    `
    ============
    Role
    ============
    
    `)
   if(!TeamData.Role) {
       TeamData.Role = [];
   }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Engineers name? (Required)',
            validate: NameInput => {
                if(NameInput) {
                    return true;
                } else {
                    console.log('Enter Engineers name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers id number? (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Enter Engineers employee id number.');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email address? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Enter your Engineers email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers Github account username? (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Enter your Engineer Github account username.');
                    return false;
                }
            }
        },  

    
    ])  .then(answer => {
        console.log(answer.Name, answer.id, answer.email, answer.github); {
        new Employee
       new Engineer (Name = answer.Name, id = answer.id, email = answer.email,  github = answer.github); {
            Engineer.Name = Name;
            Engineer.id = id;
            Engineer.email = email;
            Engineer.github = github
           
        TeamData.push(new Engineer)
        return promptMenu(); 
        }
    }
})
 }
const promptIntern = () => {
    console.log(    `
    ============
    Role
    ============
    
    `)
   if(!TeamData.Role) {
       TeamData.Role = [];
   }
    return inquirer.prompt ([
    {  type: 'input',
        name: 'Name',
        message: 'What is the Interns name? (Required)',
        validate: NameInput => {
            if(NameInput) {
                return true;
            } else {
                console.log("Enter Interns name.");
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'id',
        message: 'What is the Interns employee id number? (Required)',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Enter Interns id number.');
                return false;
            }
        }

    },
    {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email address? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Enter your Interns email address.');
                    return false;
                }
            }
        },
        {
                type: 'input',
                name: 'school',
                message: 'What is the Interns School name? (Required)',
                validate: schoolInput => {
                    if(schoolInput) {
                        return true;
                    } else {
                        console.log('Enter Interns school name.');
                        return false;
                    }
                }
            },  

    ]) .then(answer => {
        console.log(answer.Name, answer.id, answer.email, answer.school); {
       new Employee
       new Intern (Name = answer.Name, id = answer.id, email = answer.email,  school = answer.school); {
            Intern.Name = Name;
            Intern.id = id;
            Intern.email = email;
            Intern.school = school;           
        TeamData.push(new Intern)
        return promptMenu(); 
        }
    }
})
 }
const promptRole = () => {
    console.log(    `
    ============
    Role
    ============
    
    `)
   if(!TeamData.Role) {
       TeamData.Role = [];
   }
    return inquirer.prompt ([
        {
            type: 'confirm',
            name: 'confirmDone',
            message: 'Are you done building your team?',
            default: false
        } 
    ]) .then(RoleData => {
        TeamData.Role.push(RoleData);
        if(RoleData.confirmDoneRole) {
            return promptRole(TeamData);
        } else {
            return TeamData;
            }
        });
    } 



const writeToFile = (fileName, TeamData) => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileName,  err => {
       if (err) {
           reject(err);
           return;
        }
        resolve({
            ok: true,
            message: console.log('Index html file created')

        });
    });
});
};




function employees() {
    promptManager()
    .then(answers => {
     const html = generateHTML(TeamData);
       writeToFile(html);
     
   });
}


employees()
