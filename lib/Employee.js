class Employee {
    constructor(Name, id, email) {
    this.Name = Name;
    this.email = email;
    this.id =id;
   
}

    getName() {
        return {
            name: this.Name
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