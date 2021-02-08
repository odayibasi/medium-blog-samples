function sayHello(userObj){
    console.log(`My name is ${userObj.name}`);
}

function user(name){
    const obj={name:name};
    return obj;
}

const oUser=user('Onur');
sayHello(oUser)
