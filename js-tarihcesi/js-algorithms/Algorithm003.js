const proto = {
  sayHello: function hello() {
    console.log(this.name);
  },
};
const a = Object.assign({}, proto, { name: 'onur' });
console.log(a);
a.sayHello();

const b = { ...proto, name: 'ali' };
console.log(b);
b.sayHello();
