// This Code from http://johnny-five.io/
const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    // Create a standard `led` component
    // on a valid pwm pin
    const led = new Led(11);

    led.pulse({
        easing: "linear",
        duration: 3000,
        cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
        keyFrames: [0, 10, 0, 50, 0, 255],
        onstop: function() {
            console.log("Animation stopped");
        }
    });



    // Stop and turn off the led pulse loop after
    // 10 seconds (shown in ms)
    board.wait(10000, () => {

        // stop() terminates the interval
        // off() shuts the led off
        led.stop().off();
    });
});
