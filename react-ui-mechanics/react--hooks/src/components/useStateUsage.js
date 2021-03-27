import React from "react";

/*============================================================================
  THEME
============================================================================ */
export function Theme() {
    const [theme, setTheme] = React.useState('light')

    const toDark = () => setTheme('dark')
    const toLight = () => setTheme('light')

    return (
        <div className={theme}>
            {theme === "light"
                ? <button onClick={toDark}>🔦</button>
                : <button onClick={toLight}>💡</button>}
        </div>
    )
}


/*============================================================================
  TODO_APP
============================================================================ */

//https://codesandbox.io/s/usestate-solution-todos-is3ju?file=/src/index.js:86-1114


export function Todo() {
    const [todos, setTodos] = React.useState([])
    const [input, setInput] = React.useState('')
    const [id, setId] = React.useState(0);

    const handleAdd = () => {
        setTodos((todos) => [{text: input, id: id}, ...todos])
        setInput('')
        setId(id + 1);
    }

    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))

    return (
        <div>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='New Todo'
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map(({text, id}) => (
                    <li key={id}>
                        <span>{text}</span>
                        <button onClick={() => removeTodo(id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


/*============================================================================
  SHOW/HIDE
============================================================================ */

//https://codesandbox.io/s/usestate-solution-showhide-x3y12?file=/src/index.js:867-874
export function Post() {
    const posts = [
        {id: 0, text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.'},
        {id: 1, text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.'},
        {id: 2, text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.'}
    ]
    const [openIndex, setOpenIndex] = React.useState(0)
    return (
        <ul>
            {posts.map(({id, img, text}, index) => {
                const isOpen = openIndex === index

                const textToShow = isOpen ? text : text.substring(0, 100) + '...'

                return (
                    <li key={id} style={{border: isOpen ? '1px solid black' : 'none'}}>
                        <p>{textToShow}</p>
                        {!isOpen && (
                            <button onClick={() => setOpenIndex(index)}>
                                Open
                            </button>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
