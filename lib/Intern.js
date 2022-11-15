const Employee=require("./Employee");

class Intern extends Employee{
    constructor({ id, name, email }, school){
        this.school=school;
        super(id,name,email);
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
    
}

module.exports=Intern;