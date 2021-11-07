//This code taken https://medium.com/@venomnert/pipe-function-in-javascript-8a22097a538e blogpost
const _pipe = (a, b) => (arg) => b(a(arg));
const pipe = (...ops) => ops.reduce(_pipe);

const calcTotalWithTax = (pizzaCost) => pizzaCost * 1.13;
const costForTwo = (itemCost) => Math.round((itemCost / 2) * 100) / 100;
const cadToUSD = (cad) => Math.round(cad * 0.753653 * 100) / 100;
const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

const costPerPersonUsd = pipe(
  calcTotalWithTax,
  trace('calcTotalWithTax g'),
  costForTwo,
  trace('costForTwo f'),
  cadToUSD,
  trace('cadToUSD c')
);
console.log(`You have to pay $ ${costPerPersonUsd(5)} US.`); // You have to pay $2.13 in usd
