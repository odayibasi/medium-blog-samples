const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

// console.log(sum(12, 3));
// console.log(sub(12, 3));

function calculator(fn) {
  return {
    sumAndWrite(a, b) {
      fn(sum(a, b));
    },
    subAndWrite(a, b) {
      fn(sub(a, b));
    },
  };
}

const write = (data) => console.log(data);
// calculator(write).sumAndWrite(12, 3);
// calculator(write).subAndWrite(12, 3);

const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function calculator2(fn) {
  return {
    mulAndWrite(a, b) {
      fn(mul(a, b));
    },
    divAndWrite(a, b) {
      fn(div(a, b));
    },
  };
}

const combinedCalculator3 = Object.assign(
  {},
  calculator(write),
  calculator2(write)
);
combinedCalculator3.sumAndWrite(12, 3);
combinedCalculator3.divAndWrite(12, 3);



const combinedCalculator2 = { ...calculator(write), ...calculator2(write) };
combinedCalculator2.sumAndWrite(12, 3);
combinedCalculator2.divAndWrite(12, 3);

calculator(write).sumAndWrite(12, 3);
calculator2(write).divAndWrite(12, 3);

function extend() {
  for (var i = 1; i < arguments.length; i++)
    for (var key in arguments[i])
      if (arguments[i].hasOwnProperty(key))
        arguments[0][key] = arguments[i][key];
  return arguments[0];
}

