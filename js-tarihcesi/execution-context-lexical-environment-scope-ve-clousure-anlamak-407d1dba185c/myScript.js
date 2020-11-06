const example0001 = (function () {
    console.log("Example 1------");
    var a = 'Hello World';

    function b() {
        console.log(a);
    }

    b();

})();


const example0002 = (function () {
    console.log("Example 2------");
    console.log(a);
    b();

    var a = 'Hello World';

    function b() {
        console.log("b Called");
    }

    console.log(a);

})();


const example0003 = (function () {

    console.log("Example 3------");

    function multiply(a, b) {
        return a * b;
    }

    function square(n) {
        return multiply(n, n);
    }

    function printSquare(n) {
        const squared = square(n);
        console.log(squared);
    }

    printSquare(5);

})();


const example0004 = (function () {

    console.log("Example 4------");

    function c() {
        var x = 4;
        console.log(`c function called ${x}`);
    }

    function b() {
        var x = 3;
        c();
        console.log(`b function called ${x}`);
    }


    function a() {
        var x = 2;
        b();
        console.log(`a function called ${x}`);
    }

    var x = 1;
    a();
    console.log(`main function called ${x}`);

})();


const example0006 = (function () {

    console.log("Example 6------");


    function a() {

        function b() {

            function c() {
                console.log(`c function called ${x}`);
            }

            var x = 3;
            c();
            console.log(`b function called ${x}`);
        }


        var x = 2;
        b();
        console.log(`a function called ${x}`);
    }

    var x = 1;
    a();
    console.log(`main function called ${x}`);

})()


const example0007 = (function () {

    console.log("Example 7------");


    function a() {

        function b() {

            function c() {
                console.log(`c function called ${x}`);
            }

            c();
            console.log(`b function called ${x}`);
        }


        b();
        console.log(`a function called ${x}`);
    }

    var x = 1;
    a();
    console.log(`main function called ${x}`);

})();


const example0008 = (function () {

    console.log("Example 8------");

    function saySomething(something) {
        return function (who) {
            console.log(`${something} ${who}`)
        }
    }

    saySomething("Hello")("Onur");
})();