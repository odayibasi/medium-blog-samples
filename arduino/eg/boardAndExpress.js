const express = require('express')
const {Board, Led} = require("johnny-five");
const board = new Board();

const app = express()
const port = 3000
let counter = 0;
let led8 = null;


app.get('/', (req, res) => {
    if (led8) {
        ++counter;
        if (counter % 2 === 1) led8.on();
        else led8.off();
        res.send(`Led status ${counter % 2 ? 'ON' : 'OFF'}`)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

board.on("ready", () => {
    console.log("Ready!");
    led8 = new Led(8);
});


board.on('error', function (error) {
    console.log(error);
})



