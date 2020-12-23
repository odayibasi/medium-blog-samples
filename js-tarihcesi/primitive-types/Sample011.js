//Interpolation
const a=5;
const b=7;
console.log(`sum of a and b is ${a+b}`); 
const my={name:'Onur', surname:'Dayibasi'}
console.log(`My name is ${my.name} ${my.surname}`); 

//Multiline
const string = `Ali say Hello!
                Veli say How Are you
                asas                 is awesome`;
console.log(string);


//DSL
function sampleTag(strings,name, surname) {
   return  `${strings[0]}${name[0]}...${strings[1]}${surname[0]}...`
}
const name='ONUR';
const surname='DAYIBASI';
const result=sampleTag`${name} and surname is${surname}.`;
console.log(result);

