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