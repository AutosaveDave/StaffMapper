const Employee=require("./Employee");

class Engineer extends Employee{
    constructor({ id, name, email }, github){
        this.github=github;
        super(id, name, email);
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports=Engineer;