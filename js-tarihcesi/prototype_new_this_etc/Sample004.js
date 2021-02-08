class user{
  constructor(name){
    this.name=name;
  }

  sayHello(){
      console.log(`My name is ${this.name}`);
  }
}

(new user('Onur')).sayHello();
(new user('Deniz')).sayHello();

