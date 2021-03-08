
//This code from https://exploringjs.com/deep-js/ch_proxies.html#an-example

const target = {}; // Start with an empty object
const handler = {}; // Don’t intercept anything
const {proxy, revoke} = Proxy.revocable(target, handler);

// `proxy` works as if it were the object `target`:
proxy.city = 'Paris';
assert.equal(proxy.city, 'Paris');

revoke();

