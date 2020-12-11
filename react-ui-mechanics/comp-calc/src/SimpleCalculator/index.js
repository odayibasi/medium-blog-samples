import React, {useState} from 'react';
import {CalcMachine} from './CalcMachine';

//DATA PART
const opButtonsData = [
    {title: '+', val: '+'},
    {title: '-', val: '+'},
    {title: '*', val: '*'},
    {title: '/', val: '/'},
]

const numButtonsDataGen = (limit) => {
    const numArr = [];
    for (let i = 0; i < limit; i++) {
        numArr.push({title: `${i}`, val: `${i}`});
    }
    return numArr;
}

const numButtonsData10 = numButtonsDataGen(10);


//COMPONENTS PART
const Button = (props) => {
    return (<button onClick={props.onClickHandler}>{props.title}</button>)
}

const Screen = (props) => {
    //const val = props.value === '' ? 0 : props.value
    const val = props?.value; //Similar
    return (<div>{val}</div>)
}


const calc = CalcMachine();

const SimpleCalculator = () => {

    const [result, setResult] = useState('');

    const opBtnsDOM = opButtonsData.map(el => <Button key={el.title} title={el.title}
                                                      onClickHandler={() => setResult(calc.push(el.val))}/>);

    const numBtnsDOM = numButtonsData10.map(el => <Button key={el.title} title={el.title}
                                                          onClickHandler={() => setResult(calc.push(el.val))}/>);
    return (
        <div className='calcContainer'>
            <Screen value={result}/>
            {opBtnsDOM}
            {numBtnsDOM}
            <Button key='Reset' title='Reset' onClickHandler={() => setResult(calc.reset())}/>
            <Button key='=' title='=' onClickHandler={() => setResult(calc.calc())}/>
        </div>
    )
}

export default SimpleCalculator;
