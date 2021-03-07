// This Code from http://johnny-five.io/
const { Board, Led } = require("johnny-five");
const board = new Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
// This Code from http://johnny-five.io/
board.on("ready", () => {
    console.log("Ready!");
    const led = new Led(11);
    led.blink(500);
});

board.on('error',function(error){
    console.log(error);
})
