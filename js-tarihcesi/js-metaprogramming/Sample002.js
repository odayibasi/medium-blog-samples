//This Code from https://exploringjs.com/deep-js/ch_proxies.html Book
const logged = [];

const target = {age:9, name:'deniz'};
const handler = {
  /** Intercepts: getting properties */
  get(target, propKey, receiver) {
    logged.push(`GET ${propKey}`);
    return target[propKey];
  },

  /** Intercepts: checking whether properties exist */
  has(target, propKey) {
    logged.push(`HAS ${propKey}`);
    return propKey in target;
  }
};


const proxy = new Proxy(target, handler);


console.log(proxy.age);
console.log(logged)

console.log(proxy.name);

'hello' in proxy
console.log(logged)




