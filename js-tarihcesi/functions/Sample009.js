//This code taken from https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 blogpost
const withConstructor = (constructor) => (o) => ({
  __proto__: { constructor },
  ...o,
});

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);
// or `import pipe from 'lodash/fp/flow';`
// Set up some functional mixins

const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

const withFlying = (o) => {
  let isFlying = false;
  return {
    ...o,
    fly() {
      isFlying = true;
      return this;
    },
    land() {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying,
  };
};
const withBattery =
  ({ capacity }) =>
  (o) => {
    let percentCharged = 100;
    return {
      ...o,
      draw(percent) {
        const remaining = percentCharged - percent;
        percentCharged = remaining > 0 ? remaining : 0;
        return this;
      },
      getCharge: () => percentCharged,
      getCapacity: () => capacity,
    };
  };
const createDrone = ({ capacity = '3000mAh' }) =>
  pipe(
    withFlying,
    trace('withFlying'),
    withBattery({ capacity }),
    trace('withBattery'),
    withConstructor(createDrone),
    trace('withConstructor')
  )({});

const myDrone = createDrone({ capacity: '5500mAh' });
console.log(`
  can fly:  ${myDrone.fly().isFlying() === true}
  can land: ${myDrone.land().isFlying() === false}
  battery capacity: ${myDrone.getCapacity()}
  battery status: ${myDrone.draw(50).getCharge()}%
  battery drained: ${myDrone.draw(75).getCharge()}% remaining
`);
console.log(`
  constructor linked: ${myDrone.constructor === createDrone}
`);
