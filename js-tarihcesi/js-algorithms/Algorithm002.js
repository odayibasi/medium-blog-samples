const proto = {
  sayHello: function hello() {
    console.log(`My name is ${this.name} and I am  ${this.age}  years old.`);
  },
};

function User(name, age) {
  const user = Object.assign({}, proto, { name, age });
  return user;
}
const onur = User('Onur', 39);
onur.sayHello();