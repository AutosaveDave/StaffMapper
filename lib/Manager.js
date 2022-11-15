const Employee=require("./Employee");

class Manager extends Employee{
    constructor({ id, name, email }, officeNumber){
        this.officeNumber=officeNumber;
        super(id,name,email);
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
    
}

module.exports=Manager;