export default function(){
    console.log("An example of constructor method, prototype and inherit the prototype into another method");
}

// create a constructor method and export to common.js file.

function Parent_function(){
    this.Fname = '';
}

// create a prototype method of Parent_function
Parent_function.prototype.main_func = function(){
    console.log("Sayandeep Nayak");
}
// create a constructor method
function GetData(){
    this.name = 'Abhijit';
    this.surname = 'Boral'
    /* this.fullName = function(){
        console.log(this.name +" "+this.surname );
    } */
}
// create a prototype method of GetData
GetData.prototype.fullName = function(){
    console.log(this.name +" "+this.surname );
}
// inherit the  Parent_function() method into the GetData() method.
GetData.prototype.__proto__ = Object.create(Parent_function.prototype);

export let person = new GetData();