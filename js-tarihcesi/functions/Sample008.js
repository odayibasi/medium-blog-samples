const createUser = ({ name, age }) => ({
  name,
  age,
  setName(name) {
    this.name = name;
    return this;
  },
  setAge(age) {
    this.age = age;
    return this;
  },
});
console.log(createUser({ name: 'onur', age: '40' }));
console.log(createUser({ name: 'ali', age: '42' }));
const veli = createUser({ name: 'veli', age: '40' });
console.log(veli.setAge(41));

const user = () => {
  name: 'ali';
};
const user2 = () => ({
  name: 'ali2',
});

console.log(user()); // undefined
console.log(user2()); // ali2
