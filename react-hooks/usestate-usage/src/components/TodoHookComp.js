import React from 'react';

export function TodoHookComp() {

    const [todos, setTodos] = React.useState([]);
    const [inputVal, setInputVal] = React.useState('');

    const addTodo = () => {
        console.log('addTodo called')
        const todosClone = [...todos, inputVal];
        setTodos(todosClone);
    }

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const delTodo = (index) => {
        todos.splice(index, 1);
        const todosClone = [...todos];
        setTodos(todosClone);
    }

    const todosDOM = todos.map((el, index) => {
        return (<div key={index}>{el}
            <button onClick={() => delTodo(index)}>Del</button>
        </div>)
    })

    console.log('render called')
    return (
        <div>
            <div>
                <input onChange={handleInputChange} value={inputVal} name='todo' placeholder='Enter todo'/>
                <button onClick={addTodo}>add</button>
            </div>
            <div>
                {todosDOM}
            </div>
        </div>
    )


}
