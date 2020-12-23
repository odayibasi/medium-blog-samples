const myAddress = {
  Address: { Street: "Main", Number: 100, Apertman: { Floor: 3, Number: 301 } },
};

console.log(myAddress);
console.log(myAddress.Address.Street);
console.log(myAddress.Address.Apertman.Floor);


console.log(myAddress['Address']);
console.log(myAddress['Address.Street']); //Not Allowed




