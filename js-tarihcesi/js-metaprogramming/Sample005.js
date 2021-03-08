
//This code from https://exploringjs.com/deep-js/ch_proxies.html#an-example
const traced = [];

function traceMethodCalls(obj) {
  const handler = {
    get(target, propKey, receiver) {
      const origMethod = target[propKey];
      return function (...args) { // implicit parameter `this`!
        const result = origMethod.apply(this, args);
        traced.push(propKey + JSON.stringify(args)
          + ' -> ' + JSON.stringify(result));
        return result;
      };
    }
  };
  return new Proxy(obj, handler);
}