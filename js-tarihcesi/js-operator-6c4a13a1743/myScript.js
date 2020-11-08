const example0001 = (function () {
    console.log("Example 1-Prefix-");
    let a = 0;
    console.log(++a); //1
    console.log(a); //1
})();


const example0002 = (function () {
    console.log("Example 2 Infix------");
    let a = 0;
    console.log(a = a + 1); //1
    console.log(a); //1
})();


const example0003 = (function () {
    console.log("Example 3-Postfix-");
    let a = 0;
    console.log(a++); //0
    console.log(a); //1
})();


const example0004 = (function () {
    console.log("Example 4-");
    let a = 2, b = 4;
    console.log(a ** b);
})();


const example0005 = (function () {
    console.log("Example 5-");
    console.log("1>2", 1 > 2); //false
    console.log("1<2", 1 < 2); //true
    console.log("1<=2", 1 <= 2); //true
    console.log("1>=2", 1 >= 2); //false
    console.log("1!=2", 1 != 2); //true
    console.log(`"1" !== 1`, "1" !== 1); //true
    console.log(`"1" != 1`, "1" != 1); //false
    console.log(`"1" === 1`, "1" === 1); //false
    console.log(`1 === 1`, 1 === 1); //true
})();


const example0006 = (function () {
    console.log("Example 6-");
    const obj = {x: 10, y: 20};
    console.log("x" in obj); //true
    console.log("z" in obj); //false
    console.log(obj instanceof Object) //true
})();


const example0007 = (function () {
    console.log("Example 7-");
    console.log(true && false); //false
    console.log(true && true); //true
    console.log(false || true); //true

})();


const example0008 = (function () {
    console.log("Example 8-");
    const a = 5;        // 00000000000000000000000000000101
    const b = 3;        // 00000000000000000000000000000011
    console.log(a & b); // 00000000000000000000000000000001
    // expected output: 1

})();


const example0009 = (function () {
    console.log("Example 9-");
    const a = 2;        // 00000000000000000000000000000010
    console.log(2 << a); //8
    console.log(a >> 1);// 1
})();


const example0010 = (function () {
    console.log("Example 10-");
    const obj = {
        position: {x: 10}
    }

    console.log(obj.position.x) //10;
    //console.log(obj.pos.x) //Exception
    console.log(obj.pos?.x) //undefined

})();


const example0011 = (function () {
    console.log("Example 11-");
    const double = (n) => n * 2;
    const increment = (n) => n + 1;

    // without pipeline operator
    const result0 = double(increment(double(double(5)))); // 42
    console.log(result0)

    // with pipeline operator
    // const result1= 5 |> double |> double |> increment |> double; // 42
    // console.log(result1)

})();


const example0012 = (function () {
    console.log("Example 12-");

    console.log('3>2>1', 3 > 2 > 1); //false
    console.log('1<2<3', 1 < 2 < 3); //true

    let a = 3, b = 3, c = 1;
    console.log(a = b = c); // 1

})();



