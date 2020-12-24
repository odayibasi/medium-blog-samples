import {CalcMachine} from './CalcMachine';


test('reset', () => {
    const cMachine = CalcMachine()
    expect(cMachine.reset()).toEqual('');
});

const pushBlock = (cMachine, arr) => {
    arr.forEach(el => cMachine.push(el))
    const result = cMachine.calc();
    return result;
}

test('cases', () => {

    let keys = ['1', '+', '3'];
    expect(pushBlock(CalcMachine(), keys)).toEqual('4');

    keys = ['1', '+', '3', '+', '2'];
    expect(pushBlock(CalcMachine(), keys)).toEqual('6');

    keys = ['1', '+', '3', '+', '2', '*', '2'];
    expect(pushBlock(CalcMachine(), keys)).toEqual('12');


});
