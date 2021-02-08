function user(name){
  this.name=name,
  this.sayHello=function(){
      console.log(`My name is ${this.name}`);
  }
}

(new user('Onur')).sayHello();
(new user('Deniz')).sayHello();

