//Standart loop Methods
console.log('for-loop')
for(let i=0;i<5;i++) console.log(i);

console.log('\n while-loop')
let i=1; while(i<5) {console.log(i); i++};

console.log('\n do-loop')
let j=1; do{ console.log(j); j++} while(j<5) ;


//For Each....
const numberArray=[1,2,2,4,5];
numberArray.forEach(el=>console.log(el))

const colorSet=new Set(["red","green","blue"]);
colorSet.forEach(el=>console.log(el))

const colorMap=new Map([['red',1],['green',2]])
colorMap.forEach((value,key, map)=>{console.log(`${key}:${value}`)})

//For ...of
const arr=[1,2,2,4,5];
const str='12245'
const set=new Set([1,1,2,4])
const map=new Map([['a',1],['b',2],['c',3]]);
for(let val of arr) console.log(val);
for(let val of str) console.log(val);
for(let val of set) console.log(val);
for(let val of map) console.log(val);

//For ...in
const me={name:"Onur", age:39, height:180};
for(let key in me) console.log(key+":"+me[key]);

//For...of
for(let key of Object.keys(me)) console.log(key)
for(let keyVal of Object.entries(me)) console.log(keyVal)


//Recursive
const fibonacci=(num) => {
   if (num <= 1) return 1;
   return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));