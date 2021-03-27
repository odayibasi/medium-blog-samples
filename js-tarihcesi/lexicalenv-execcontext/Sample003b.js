const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>    { resolve("success") }, 1000)});
const promise4 = new Promise((resolve, reject) => {setTimeout(() =>{   reject("fail") }, 2000)});


Promise.all([promise1, promise2, promise3]).
      then(function(values) {   console.log(values);});

Promise.allSettled([promise1, promise2, promise4]).
      then(function(values) {   console.log(values);});