const arr = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
  { name: "d", id: 4 },
];

//High Order Functions
//Neyi soyutladik
//Donguleri soyutladik..
arr.forEach((el) => console.log(el.name));
console.log(arr.find((el) => el.id === 2));
console.log(arr.findIndex((el) => el.id === 2));
console.log(arr.filter((el) => el.id > 3));
console.log([...arr].sort((a, b) => b.id - a.id));
console.log(arr.map((a) => a.id * a.id));

const rslt=arr.map(el => el.id).reduce((sum, el) => sum + el);
console.log(rslt);
console.log(arr.every((a) => a.id > 0));
console.log(arr.some((a) => a.id > 0));


