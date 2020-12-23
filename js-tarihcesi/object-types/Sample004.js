console.log('PART0 ==========')
const ozgurObj = { isim: "ozgur", yas: 11 };
console.log(ozgurObj);

//Second same object creation needs copy/paste but we dont want
//========================================
//Multiple Object for Same Structure...
console.log('\nPART1 ==========')
function User(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  return user;
}
const onurObj = User("Onur", 39);
const denizObj = User("Deniz", 7);

console.log(onurObj);
console.log(denizObj);

//========================================
//Add function sayHello
console.log('\nPART2 ==========')
function User2(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  user.sayHello = function () {
    console.log(`My name is ${name} and I am ${age} years old.`);
  };
  return user;
}

const user2o = User2("Onur", 39);
user2o.sayHello();
const user2d = User2("Deniz", 8);
user2d.sayHello();
console.log(user2o);
console.log(user2d);

//========================================
//But problem every function allocate new fuction mem..
//how can we optimize
//extract functions outside...
console.log('\nPART3 ==========')
const commonFunctionsForUser3 = {
  sayHello: function (name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
  },
};
function User3(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  user.sayHello = commonFunctionsForUser3.sayHello;
  return user;
}

const user3o = User3("Onur", 39);
user3o.sayHello();
const user3d = User3("Deniz", 8);
user3d.sayHello();
console.log(user3o);
console.log(user3d);

//========================================
//But problem every new function we must change
//commonFunctionsForUser3
//User3 Obj
//Use Object.create
console.log('\nPART4 ==========')

const commonFunctionsForUser4 = {
  sayHello: function () {
    console.log(`My name is ${this.name} and I am ${this.age}  years old.`);
  },
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};
function User4(name, age) {
  let user = Object.create(commonFunctionsForUser4);
  user.name = name;
  user.age = age;
  return user;
}
const user4o = User4("Onur", 39);
user4o.sayHello();
user4o.sayName();
console.log(user4o);
console.log(Object.getPrototypeOf(user4o));



//========================================
//Every Class which create new has a prototype you can override
console.log('\nPART5 ==========')

User5.prototype.sayHello=function(){
   console.log(`My name is ${this.name} and I am ${this.age}  years old.`)
}
function User5(name,age){ //function User5 is same..
  this.name=name;
  this.age=age;
  return this;
}

const user5o=new User5("Onur",39);
user5o.sayHello();


//========================================
//Class is more readable...
console.log('\nPART6 ==========')

class User6{
    constructor(name,age){
       this.name=name;
       this.age=age
    }
    sayHello(){
       console.log(`My name is ${this.name} and I am ${this.age}  years old.`)}
}
const user6o=new User6("Onur",39);
user6o.sayHello();

