class Employee {
    constructor() {
        this.id=id;
        this.name=name;
        this.email=email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports=Employee;