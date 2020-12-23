//===================================================
//Function.apply Gerek Kalmadi Spread ozelligi ===
function sum(x,y,w,z){
    let toplam=x+y+w+z; return toplam;
}
console.log(sum.call(this,3,5,7,9)); //with normal params

console.log(sum.apply(this,[3,5,7,9])); //with array
console.log(sum.call(this,...[3,5,7,9])); //call can be array spread...
console.log(sum(this,...[3,5,7,9])); //call can be array 


const arr0=[2,3]; arr0.push(4,5); console.log(arr0);

const arr1=[2,3]; arr1.push.apply([4,5]); console.log(arr1);
const arr2=[2,3]; arr2.push(...[4,5]); console.log(arr2);

//===================================================
//Array Splice gerek kalmadi ...
const arr00=[1,2]; arr00.splice(1,0,4,5); console.log(arr00);
const arr01=[1,...[4,5],2]; console.log(arr01);


//===================================================
//Array Concat gerek kalmadi ...
const arr001=[1,2]; console.log(arr001.concat([3,4],[5])); console.log([...[1,2],...[3,4],...[5]]);

//===================================================
//Array Copy gerek kalmadi ...
const arr0001=[1,2]; const arr0002=[...arr0001]; arr0001.push(3);
console.log(arr0002);

//===================================================
//Obj Copy gerek kalmadi ...

const obj1={a:1,b:2}; const obj2={...obj1}; obj1['c']=3;
console.log(obj2);


//===================================================
//Math.max apply kullanmaya gerek kalmadi//
console.log(Math.max(1,5,3)); //5

console.log(Math.max.apply(this,[1,5,3])); //5
console.log(Math.max(...[1,5,3])); //5