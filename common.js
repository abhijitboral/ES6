/*
    //Array destructuring 

    let arr = ['car','bike','cycle'];
    let [aar1,arr2,arr3] = arr;
    console.log(`First value: ${aar1} Second value: ${arr2} Third value: ${arr3}`);

    //Swap tow value without third variable

    let val1 = 5;
    let val2 = 10;

    [val2,val1] = [val1,val2];

    console.log(`First value: ${val1} Second value: ${val2}`);


    // object destructurig
    let myObj = {
        name: 'abhijit',
        age:'30',
        gender: 'male',
        hobby: {
            play : 'cricket',
            skill : 'coding'
        }
    }

   {name,age,gender,hobby} = myObj // normal way where you can't change the object property name. it should be same
    console.log(name); 
    console.log(hobby.skill);  

    let [name:myname,age:myage,gender:mygender,hobby:myhobby] = myObj // remane the valriable
    console.log(myname); 
    console.log(myhobby.skill);



    // Arrow function 

    const myFunc = () => {
        let a = 10;
        let b = 20;
        return a + b;
    }

    console.log(myFunc());

    // Default Parameters in arrow function

    const myFunc = (a,b=20) => {
        return a + b;
    }
    myFunc(10);

   // Rest Parameters

   const restParaFunc = (...arrs) => {
    let total = 0;
    for (let arr of arrs) {
        total = total + arr
    }
    return total;
}

restParaFunc(1,2,3,4,5,6,7,8,9);

// marge array using Spread Operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let fullArr = [...arr1,...arr2,...arr3];
console.log(fullArr);


// array push 

let arr1 = [1,2,3];
arr1.push(4,5);
console.log(arr1);

// OR using Spread Operator

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
console.log(arr2);

// shadowed variable
let x  = 0 // shadowed variable
{
  let x = 1;
  console.log(x)
}

//Hoisting
let name = 'john';

sayHi() // valid

function sayHi(){
  console.log(name)
}

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

Only the variable sayHi is hoisted (with undefined), not the actual function.


//Temporal Dead Zone
// Temporal Dead Zone (TDZ) is the time between the start of a block and the point where a variable is declared.
// TDZ starts here
let x = 10;
// TDZ ends here

Var no TDZ

console.log(city); // ❌ ReferenceError
const city = "London"; // let city = "London";


//Closure
A closure gives you access to an outer function’s variables from an inner function — even after the outer function has returned.
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer();  // outer() is called, and inner() is returned

increment();  // 1
increment();  // 2
increment();  // 3


// IIFE (Immediately Invoked Function Expression)
Is defined and executed immediately after it's created.Runs once and does not pollute the global scope.
// Example of IIFE
(function() {
	console.log("This is an IIFE");
})();


Currying
// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This allows for partial application of functions, making them more flexible and reusable.
// Example of Currying
function add(a) {
	return function(b) {
		return a + b;
	};
}

*/



import {default as app_fun,person} from '/module/app.js';
import {human} from '/module/example_of_class.js';
app_fun();
person.fullName();
person.main_func();

//example_of_class.js methods below
console.log(human);
human.getAll();

///////////////////////////////------Common js------//////////////////////////////////////////////////

// Example of inheritance

class Car{
    constructor(name,seat){
        this.carName = name;
        this.seat = seat; 
    }

    myFunction1(){
        console.log(this.carName);
    }
    myFunction3(){
        console.log("Called parent method from inside a child method");
    }
}

class Man extends Car{
    #privaet_variable = '';
    constructor(carName, carSeat,myName){
        super(carName, carSeat); // call the constructer of parent class by using super() method.
        this.myName = myName;
        this.#privaet_variable = 'Privaet Variable';
        console.log(`My name is ${myName} . I have a ${carSeat} seater ${carName} car` );
    }
    #privetMethod(){
        //console.log(this.#privaet_variable);
        console.log("you must call a privet method from inside a public method.You can't call privet method by using object.");
    }
    myFunction2(){
        // this.seat and this.carName are parent class properties.
        console.log(`My name is ${this.myName} . I have a ${this.seat} seater ${this.carName} car` );
        super.myFunction3(); // Call parent function from inside a child method useing super keyword.
        console.log(this.#privaet_variable); // You must call privet variable from a public class. You can't call privet variable by using object or privet method.

        this.#privetMethod(); //you must call a privet method from inside a public method.You can't call privet method by using object.
    }

}

let myObject = new Man('Maruti',7,'Abhijit'); // cerate an object with parameter
console.log(myObject);
myObject.myFunction1();
myObject.myFunction2();


////////////////////////////////////------------Matchin----------------///////////////////////////////////////

// Example of Matchin
let MyObject = {
    Fnmathcin1(){
        console.log('hello...');
    },
    Fnmathcin2(){
        console.log('hi...');
    },
    name: 'Matchin'
};

class matchInClass{
    constructor(){
        console.log('Abhijit');
    }
}
Object.assign(matchInClass.prototype,MyObject); //you can inherit an outer object inside from a class.

let matchin = new matchInClass();
console.log(matchin.Fnmathcin1());
console.log(matchin.Fnmathcin2());
console.log(matchin.name);