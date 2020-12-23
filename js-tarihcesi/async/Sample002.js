const waitThenCall = (waitTime, callback) => {
       const result="success";
       setTimeout(() => { callback(result) }, waitTime * 1000)
}
waitThenCall(2,(result)=>{console.log(result);});


//Callback Hell
waitThenCall(1, () => {
    console.log("After1 Seconds")
    waitThenCall(2, () => {console.log("After3 Seconds") 
         waitThenCall(3, () => {console.log("After6 Seconds")    
             waitThenCall(4, () => {console.log("After10 Seconds")
                  waitThenCall(5, () => {console.log("After15 Sec")})
             })
          })
    })
})

