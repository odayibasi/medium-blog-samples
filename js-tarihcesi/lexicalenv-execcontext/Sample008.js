 function saySomething(something) {
        return function (who) {
            console.log(`${something} ${who}`)
        }
    }

saySomething("Nasılsın")("Ali")
saySomething("İyiyim Sen Nasılsın")("Veli")
