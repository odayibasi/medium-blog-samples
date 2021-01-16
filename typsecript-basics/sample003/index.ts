async function getGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  return user;
}

getGitHubUser('gearon');


const response: unknown = "response text";
if (typeof response === 'string') {
  let name: string = response;
  console.log(response.length);
}

interface User {
  name?: string,
  age: number,
}

const logUserNameLength = (user: User) => {
  if (user.name) {
    console.log(`${user.name.length} `);
  }
}

const ali: User = { name: 'ali', age: 12 }; logUserNameLength(ali);
const veli: User = { age: 12 }; logUserNameLength(veli);


interface OtherUser {
  name: string,
  age: number,
}

interface UserX {
  name: string,
  age: string,
  [extras: string]: string
}

const ahmet: UserX = { name: 'ahmet', age: '10' }
ahmet.height = '140cm';
ahmet.weight = '25kg';




const logUser = (user: User) => {
  console.log(`${user.name} ${user.age}`);
}

const onur: User = { name: 'Onur', age: 39 }; console.log(onur);
const othUser: OtherUser = { name: 'Ali', age: 40 }; console.log(othUser)



const ozg: User = { name: 'Ozgur', age: 13 };
const deniz: { name: string, age: number, w: number } = { name: 'Deniz', age: 9, w: 36 };
const ugur: { name: string } = { name: 'Ugur' };
const users: User[] = [onur, ozg, { name: 'Deniz', age: 9, w: 36 }]; //Complain If Obj real
const users1: User[] = [onur, ozg, deniz]; //Don't Complain If Obj ref..
const users2: User[] = [onur, ozg, deniz, ugur];






interface Coordinate3d {
  x: number,
  y: number,
  z: number,
}

interface Shape {
  color: string
  name: string
}

interface Triangle extends Shape {
  p1: Coordinate3d,
  p2: Coordinate3d,
  p3: Coordinate3d,
}

let t1: Triangle;
let sh1: Shape;






enum Engine {
  on,
  off,
  broken,
}

function log(state: Engine) {
  console.log(state);
}

log(Engine.on);



let val: number;
const useState = (defaultVal: number): [number, (newValue: number) => void] => {
  if (!val) val = defaultVal;
  return [val, (newValue) => val = newValue];
}

let [count, setCount] = useState(2);
console.log(count);
setCount(12);


let mat2x2: {
  row1: [number, number],
  row2: [number, number]
}

type mat4x4_row = [number, number, number, number]

let mat4x4: {
  row1: mat4x4_row,
  row2: mat4x4_row,
  row3: mat4x4_row,
  row4: mat4x4_row,
}


interface pattern {
  repeatMode: boolean,
  style: string,
}

interface color {
  name: string
}

interface point { x: number, y: number }

interface shape {
  points: point[]
  bg: color | pattern
}

const paintShape = (shp: shape) => {
  if ('name' in shp.bg) console.log(shp.bg.name);
  else console.log(shp.bg.style);
}

const triange: shape = { points: [], bg: { name: 'red' } }; console.log(triange);
const rectangle: shape = { points: [], bg: { repeatMode: true, style: 'dash' } }; console.log(rectangle);


interface XY { x: number, y: number }
interface YZ { y: number, z: number }
interface XZ { x: number, z: number }

const superCoordinate: XY & YZ & XZ = { x: 1, y: 2, z: 3 };



interface oval {
  name: 'oval'
  edgeCount: -1
}

type flag = true | false;
let state: 'none' | 'fetching' | 'fetched' | 'error';
let power2: 1 | 2 | 4 | 8 | 16 | 32;
