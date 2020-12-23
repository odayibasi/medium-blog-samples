//Flat
const a0=['AA', ['BB', 'CC']].flat(); console.log(a0); 
//['AA', 'BB','CC']
const a1=['AA', ['BB', ['CC']]].flat(2); console.log(a1);
//['AA', 'BB','CC']
const a2=['AA', ['BB', ['CC', ['DD']]]].flat(Infinity); console.log(a2); //['AA', 'BB','CC']


//flatMap
const b0=['Aa bb', 'cc dd'].map(words => words.split(' ')); console.log(b0);
const b1=['Aa bb', 'cc dd'].flatMap(words => words.split(' ')); console.log(b1); 


//Destruction
const colors=['red','green','blue'];
let [val1,,val3]=colors 
console.log(val1,val3) 

let [valx1,,valx3,valx4='orange']=colors 
console.log(valx1,valx3,valx4) //red blue orange