function user(name,age){
      this.age=age;
      this.name=name;
}


const handler={
   construct(target,argList){
     console.log('constructor call')
  return new target(...argList)
   }
}

const proxyUser=new Proxy(user,handler);
const pUser=new proxyUser('onur',41);
console.log(pUser)





