class Engineer {
    constructor(name, id, email, github) {
           this.name = name;
           this.email = email;
           this.id = id;
           this.github = github;
    }


getName() {
    return {
        name: this.name
    };
}

getId() {
   return {
        name: this.id
   };
}
getEmail() {
    return {
        name: this.email
    }
};

getRole() {
    return Engineer
};

getGithub() {
    return {
        name: this.github
    }
  }
}

    

module.exports = Engineer;