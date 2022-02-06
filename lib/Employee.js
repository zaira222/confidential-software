class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id =id;
   
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
        return Employee
        
    }
}

module.exports = Employee;