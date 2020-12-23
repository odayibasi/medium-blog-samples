console.log("2"==2)
console.log("2"===2)

var isFlag=true;
var age=12;
var name='ozgur';

console.log(undefined,typeof undefined)
console.log(null,typeof null)
console.log('',typeof '')
console.log(name,typeof name)
console.log(true,typeof isFlag)
console.log(12,typeof age)

var user={age:age,name:name};
var sum=(a,b)=>a+b;
var arr=[1,2];
var date=new Date();
var num=new Number(2);


console.log(user, typeof user)
console.log(arr,typeof arr)
console.log(date,typeof date)
console.log(num,typeof num)
console.log(sum,typeof sum)

console.log(age instanceof 'number')

