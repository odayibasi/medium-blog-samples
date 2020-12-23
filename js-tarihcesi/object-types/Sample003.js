const obj={};
obj.name='onur';
obj.age=40;

console.log(obj);

const obj2={name:'onur',age:30};
console.log(obj2);
obj2.color='blue'
console.log(obj2);
obj2['height']=180
console.log(obj2)

//Obj Destruction
const {name,age}=obj;
console.log(name,age);

const {name:name2,age:age2}=obj2;
console.log(name2,age2);

