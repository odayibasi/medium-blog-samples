function sayBirth(usr){
   const birth=2021-usr.age;
   console.log(`${usr.name} is birhday ${birth}`);
}


const user ={name:'ali',age:15};
sayBirth(user);








// function dynamicSum(a,b){
//    const sumExpression=`const sum=(x,y)=>x+y; sum(${a},${b});`;
//    return eval(sumExpression);
// }


// function dynamicSum2(a,b){
//    const sumFn=new Function('a','b','return a+b');
//    return sumFn(a,b);
// }


// console.log(dynamicSum2(3,5));



eval('2 + 2'); // 4
eval('2 + 2; "foo"'); // "foo"

function evalInScope() {
  var undefined = 'abc';
  return eval('undefined');
}

console.log(evalInScope());



function funcInScope() {
  var undefined = 'dddd';
  return new Function('return undefined')();
}

console.log(funcInScope());