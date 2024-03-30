const obj = {};

console.log(obj);

//? A prototype gets attached to the object that we created by default and this prototype is automatically created by javascript and has properties and methods attached to it

//? Every object created in js will have access to this prototype

//? The JavaScript prototype property allows you to add new properties to object constructors:

//? Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//* Constructor Function

function Person(firstname, lastName, age) {
  this.firstname = firstname;
  this.lastname = lastName;
  this.age = age;
  //! method in Constructor Function
  //   this.sayHi = function () {
  //     console.log(`Hi ${this.firstname}`);
  //   };
}

const p1 = new Person("Abala", "Alapala", 21);

console.log(p1);
// p1.sayHi();

//? This p1 will have 2 prototypes one is for the constructor itself and the other is the by defalut one , the Person prototype and the js prototype are connected to each other and the Person prototype is connected to the objects created form the constructor

//? The properties and methods inside the constructrr function gets copied inside the objects created from it

const p2 = new Person("Kabala", "Balapala", 71);

console.log(p2);

//? In the constructor itself we can add methods for the object but it doesn't follow the DRY rule as the method is copied and we are repeating that code in all the objects that we create from the constructor

//? Therfore, we don't attach the methods in the constructor itself rather we add them to the prototype of that constructor

Person.prototype.sayHi = function () {
  console.log(`Hi ${this.firstname}`);
};

p1.sayHi();

p2.sayHi();

//? Here, sayHi() is not present in side the object but it still manages to access that function

//? This phenomenon is known as Prototype Chaining.

//? JS checks whether the function is present inside the object itself or not, if not then it checks insdie the [[Prototype]]: Object of the constructor itself,if it doesn't find there then goes to the outermost [[Prototype]]: Object and checks and if it doesn't find their also then returns error

//? Inheritance with Prototype

//? Now if we have another constructor and we want that it will have same properties and methods of Person constructor along with its other properties and methods then we have to use inheritance

function Stupid(intelligence) {
  this.iq = intelligence;
}

const randomStupidGuy = new Stupid(10);

Stupid.prototype.hello = function () {
  console.log(`I am Idiot`);
};

console.log(randomStupidGuy);

randomStupidGuy.hello();

console.log(randomStupidGuy.age);

Stupid.prototype.__proto__ = Person.prototype;

console.log(randomStupidGuy);

// console.log(randomStupidGuy.age);

// console.log(randomStupidGuy.firstname);

// console.log(randomStupidGuy.lastName);

// console.log(p1.iq);

// console.log(p2.iq);
