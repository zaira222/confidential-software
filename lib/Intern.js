const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(Name, id, email, school) {
    super(Name, id, email)
    this.school = school;
}
getName() {
    return {
        name: Intern.Name
    };
}
getId() {
   return {
        name: Intern.id
   };
}
getEmail() {
    return {
        name: Intern.email
    }
};

getRole() {
    return Intern
};

getSchool() {
    return {
        name: Intern.school
    }
};
}


module.exports = Intern;