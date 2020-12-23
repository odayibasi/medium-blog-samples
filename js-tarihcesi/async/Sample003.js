const waitThenCall = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};
waitThenCall(() => {
  console.log("Say Hello1");
  waitThenCall(() => {
    console.log("Say Hello2");
    waitThenCall(() => {
      console.log("Say Hello3");
    });
  });
});


//Promise
const waitThenCall2 = (msg) => { 
   return new Promise((resolve, reject) => {
         setTimeout(() => {resolve(msg + 'success') }, 1000)});}


waitThenCall2('Hello1_')
   .then((data) => { console.log(data)                                  
                     return waitThenCall2('Hello2_')}, (err)=>{})
    .then((data) => { console.log(data)
                     return waitThenCall('Hello3_')}, undefined)
    .then((data) => { console.log(data)})
    .catch((err) => {console.log(err+"X")})


//Async Await
const waitThenCall3 = (msg) => { 
    return new Promise((resolve, reject) => {
       setTimeout(() => { resolve(msg + "success") }, 2000)});}

async function run(){ 
   try{
     const result=await waitThenCall3("Merhaba1");
     console.log(result)    
     const result2=await waitThenCall3("Merhaba2");
     console.log(result2)
     console.log("Hello")
   }catch(e){
     console.log(e);
   }
}

run(); 

   