class Human{
    constructor(name){
        this.fName = name;
    }
    getAll(){
        console.log('getAll function called');
    }

    static staticMethod(){
        console.log("Don't need to create an object to call static method. Insted of object we use the class. ");
    }
}
//Human.staticMethod();
export let human = new Human("abhijit");