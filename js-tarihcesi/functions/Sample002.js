/** ====  According To Functions  ===== **/

//Pure Function
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 6));
console.log(sum)

//Constructor
function User(isim,yas){
   this.isim=isim;
   this.yas=yas;
}

const ali=new User('ali',12);
const veli=new User('veli',8);
console.log(ali,veli);


//IIFE-Immediately invoked function expression
const talkOnur= (function talk(name,text){
    var konusan='konusan';
    return `${konusan} ${name}:${text}`;
})('Onur', 'Merhaba');

console.log(talkOnur);
//console.log(konusan);


//High Order Functions 
function makeAdder(x){
    return function add(y){
         return x+y;
    }
}
const tenAdder=makeAdder(10);
const twoAdder=makeAdder(2);
console.log(tenAdder(12));  //22
console.log(twoAdder(3)); 