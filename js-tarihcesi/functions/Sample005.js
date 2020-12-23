//Without Default Parameter
function add(arr,val){
   if(arr===undefined) arr=[]; //Same  arr=arr||[];
   arr.push(val);
   return arr;
}

console.log(add(undefined,2));

//With Default Parameter
function add2(arr=[],val){
   arr.push(val);
   return arr;
}


console.log(add2(undefined,3));

//==========================================

function sum(a=10, b=2){
   return a+b;
}
sum (2,2) //4
sum ()    //12
sum (3)   //5

//==========================================


function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' 1
test(undefined); // 'number' 1
test('');        // 'string' ''
test(null);      // 'object' null




