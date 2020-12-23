//Normal
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));

//Daha Matematiksel Nasil Tanimlarim
const sum2 = (a, b) => a + b;
console.log(sum2(6, 8));

const pi = () => Math.PI;
console.log(pi());

const square = (x) => x * x;
console.log(square(9));

//Dahada Matematiksel Yazalim...
const f = (x) => {
  const y = x + 3;
  return ((t) => t * (t + 5))(y);
};
console.log(f(2));


//Arrow Function kodu daha okunur kilar
function makeAdder(x){
    return function add(y){
         return x+y;
    }
}
const tenAdder=makeAdder(10);
console.log(tenAdder(12));  //22


const makeAdderWithArrow = (x) => (y) => x + y
const fiveAdder = makeAdderWithArrow(5);
console.log(fiveAdder(13));



