const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(Name, id, email, github) {
    super (Name, id, email);
           this.github = github;
    }


getName() {
    return {
        name: Engineer.Name 
    };
}

getId() {
   return {
        name: Engineer.id
   };
}
getEmail() {
    return {
        name: Engineer.email
    }
};

getRole() {
    return Engineer
};

getGithub() {
    return {
        name: Engineer.github
    }
  }
}



module.exports = Engineer;
