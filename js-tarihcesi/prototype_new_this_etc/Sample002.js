function user(name){
    const obj={
                name:name,
                sayHello:function(){
                    console.log(`My name is ${this.name}`);
                }
              };
    return obj;
}

user('Onur').sayHello();
user('Deniz').sayHello();

