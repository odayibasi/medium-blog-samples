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