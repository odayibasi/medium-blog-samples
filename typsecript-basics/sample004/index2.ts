class PersonA {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`My name is ${this.name}`);
    }
}

class UserB extends PersonA{
    username:string;
    password:string;
    constructor (name:string, age:number, username:, password){
        super(name, age);
        this.username=username;
        this.password=password
    } 
}


const onur = new UserB('onur', 40,'odayibasi','11');
console.log(typeof onur)