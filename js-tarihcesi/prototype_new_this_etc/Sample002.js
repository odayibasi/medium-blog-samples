class User{
  constructor(name){
    this.name=name;
    setTimeout(1000, this.sayName);
  }
  
  sayName=()=>{
    console.log(this.name)
  }
  
}

const user=new User('onur');





