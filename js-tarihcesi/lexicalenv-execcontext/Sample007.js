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