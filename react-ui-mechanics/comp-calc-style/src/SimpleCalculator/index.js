import React, {useState} from 'react';
import {CalcMachine} from './CalcMachine';
import './index.scss'

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


    const btnCalc = <Button key='=' title='=' onClickHandler={() => setResult(calc.calc())}/>;
    const btnAC = <Button key='AC' title='AC' onClickHandler={() => setResult(calc.reset())}/>;
    return (
        <div className='calc-layout-container'>
            <div class="screen-layout-container">
                <Screen value={result}/>
            </div>
            <div className='button-layout-container'>
                {/*{opBtnsDOM}*/}
                {/*{numBtnsDOM}*/}

                <table>
                    <tr>
                        <td>btnAC</td>
                        <td>C1</td>
                        <td>C1</td>
                        <td>{opBtnsDOM[3]}</td>
                    </tr>
                    <tr>
                        <td>{numBtnsDOM[7]}</td>
                        <td>{numBtnsDOM[8]}</td>
                        <td>{numBtnsDOM[9]}</td>
                        <td>{opBtnsDOM[2]}</td>
                    </tr>
                    <tr>
                        <td>{numBtnsDOM[4]}</td>
                        <td>{numBtnsDOM[5]}</td>
                        <td>{numBtnsDOM[6]}</td>
                        <td>{opBtnsDOM[1]}</td>
                    </tr>
                    <tr>
                        <td>{numBtnsDOM[1]}</td>
                        <td>{numBtnsDOM[2]}</td>
                        <td>{numBtnsDOM[3]}</td>
                        <td>{opBtnsDOM[0]}</td>
                    </tr>
                    <tr>
                        <td>C1</td>
                        <td>C1</td>
                        <td>C1</td>
                        <td>{btnCalc}</td>
                    </tr>
                </table>


            </div>

        </div>
    )
}

export default SimpleCalculator;
