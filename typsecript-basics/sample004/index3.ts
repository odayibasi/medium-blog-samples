interface Namable{
    name:string;
  }
  
  interface Agable{
    age:number;
  }
  
  abstract class AbstractPerson implements Namable,Agable{
    name: string;
    age: number;
    constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
     abstract sayHi():void
  }
  
  
  class PersonA extends AbstractPerson{
      constructor(name: string, age: number) {
            super(name,age)
      }
      sayHi() {
          console.log(`My name is ${this.name}`);
      }
  }
  
  class UserB extends PersonA{
      username:string;
      password:string;
      constructor (name:string, age:number, username:string, password:string){
          super(name, age);
          this.username=username;
          this.password=password
      } 
  }
  
  
  const onurB = new UserB('onur', 40,'odayibasi','11');
  onurB.sayHi();
  