const delay = (ms, x) => new Promise((r) => setTimeout(r, ms, x));
const sq = async (x) => delay(1000, x * x);
const add1 = async (x) => delay(1000, x + 1);
const comp =(f, g) =>(x) =>f(x).then(g);
const main = comp(sq, add1);
const demo = (p) => p.then(console.log, console.error);
demo(main(10));
// 2 seconds later...
// 101