
//This code from https://exploringjs.com/deep-js/ch_proxies.html#an-example

//Standart Usage
const handler = {
  deleteProperty(target, propKey) {
    console.log('DELETE ' + propKey);
    return delete target[propKey];
  },
  has(target, propKey) {
    console.log('HAS ' + propKey);
    return propKey in target;
  },
  // Other traps: similar
}

//Reflect Usage....
const handlerReflect = {
  deleteProperty(target, propKey) {
    console.log('DELETE ' + propKey);
    return Reflect.deleteProperty(target, propKey);
  },
  has(target, propKey) {
    console.log('HAS ' + propKey);
    return Reflect.has(target, propKey);
  },
  // Other traps: similar
}