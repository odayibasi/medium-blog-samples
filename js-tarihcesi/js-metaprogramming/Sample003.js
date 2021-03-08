//This Code from 
//https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    return target(argumentsList[0], argumentsList[1]) * 10;
  }
};

const proxy = new Proxy(sum, handler);

console.log(sum(1, 2));
console.log(proxy(1, 2));
console.log(proxy.call(this,3,3));




