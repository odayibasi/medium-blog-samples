
//This code from https://exploringjs.com/deep-js/ch_proxies.html#an-example

get(target, propertyKey, receiver) {
    console.log('GET '+propertyKey);
    return target[propertyKey];
  }
});

const obj = Object.create(proto);
obj.weight;