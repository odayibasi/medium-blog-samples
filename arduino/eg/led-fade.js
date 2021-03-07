// This Code from http://johnny-five.io/
const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    const led = new Led(11);

    led.fadeIn();

    // Toggle the led after 5 seconds (shown in ms)
    board.wait(5000, () => {
        led.fadeOut();
    });
});
