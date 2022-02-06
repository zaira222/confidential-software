class Manager {
    constructor(name, id, email, officeNumber) {
    this.name = name;
    this.email = email;
    this.id =id;
    this.officeNumber = officeNumber;
   
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
    return Manager
};
}
module.exports = Manager;