const log=console.log;

const arr=['red','green','blue'];
log(arr.includes('green'));


const str='onur dayibasi'
const a=str.includes('ur'); log(a);
const b=str.indexOf('ur');  log(b);
const c=str.match(/ur/g);  log(c);
const d=(new RegExp('ur')).test(str); log(d)
