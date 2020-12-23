console.log('prefix');
let a = 0;
console.log(++a); //1
console.log(a); //1

console.log('infix');
a = 0;
console.log(a = a + 1); //1
console.log(a); //1

console.log('postfix');
a = 0;
console.log(a++); //0
console.log(a); //1