user.prototype.sayHello=function(){
      console.log(`My name is ${this.name}`);
}

function user(name){
  const obj=Object.create(user.prototype);
  obj.name=name;
  return obj;
}

user('Onur').sayHello();
user('Deniz').sayHello();

