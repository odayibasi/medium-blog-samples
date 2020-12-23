console.log('script start');
//Task
setTimeout(function() { console.log('setTimeout');}, 0);
//MicroTask
Promise.resolve().then(function() {
   console.log('promise1');   }).
then(function() {
   console.log('promise2');
});
console.log('script end');