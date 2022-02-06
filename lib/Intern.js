class Intern {
    constructor(name, id, email, school) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.school = school;
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
    return Intern
};

getSchool() {
    return {
        name: this.school
    }
};
}


module.exports = Intern;