function sayHello(){
  var foo='Hello';
  function addWorld(){
     foo+=' World'
  }
  addWorld();
  return foo;
}

console.log(sayHello());

