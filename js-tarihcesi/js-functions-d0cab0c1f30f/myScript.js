const user = {
    name: 'onur'
}
console.log(user);

const users = ['onur', 'deniz'];

console.log(users);

function op(...arr) {
    return arr.reduce((total, el) => total + el);
}

const sum = a => b => a + b;
const mul = a => b => a * b;

const addTwo = sum.bind(this, 2);
const addTen = sum.bind(this, 10);

console.log(addTwo(3, 2)); //7
console.log(addTen(3, 2, 5)); //20
console.log(op(sum,3, 2)); //5


//const cUNew=new createUser('Onur');

//console.log(cU)
