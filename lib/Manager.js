const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(Name, id, email, officeNumber) {
    super(Name, id, email);
    this.officeNumber = officeNumber;
   
}
getName() {
    return {
        name: Manager.Name
    };
}
getId() {
   return {
        name: Manager.id 
   };
}
getEmail() {
    return {
        name: Manager.email 
    }
};

getRole() {
    return  Manager
};
}
module.exports = Manager;