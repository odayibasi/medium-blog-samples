class UserC {
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

const onurC = new UserC('onur', 40);
onurC.sayHi();


function UserF(name:string,age:number) {
    this.name = name;
    this.age = age;
}
    
UserF.prototype.sayHi=function(){
        console.log(`My name is ${this.name}`);
}

const onurF = new UserF('onur', 40);
onurF.sayHi();