import './App.css';
import React from "react";

import {Post, Theme, Todo} from "./components/useStateUsage";
import {
    CharLimit,
    Counter,
    Counter2,
    Counter3,
    Counter4,
    PostFetching,
    Profile,
    Profile2,
    Wait,
    WindowDimensionCalculator,
} from "./components/useEffectUsage";

import {ThemeContextSample,} from "./components/useContextUsage";


import {CounterWorkReducer} from "./components/useReducerUsage";


import {FancyInputWithFocusButton, TextInputWithFocusButton} from "./components/useRefUsage";


const components = ['Theme', 'Todo', 'Post', 'Counter', 'Counter2', 'Counter3', 'Counter4',
    'Profile', 'Profile2', 'CharLimit', 'Wait', 'PostFetching',
    'WindowDimensionCalculator', 'ThemeContextSample', 'CounterWorkReducer', 'Focus2Comp', "Focus2FancyComp"];
const compsVDOM = components.map(el => (<option key={el}>{el}</option>))

function App() {

    const [comp, setComp] = React.useState(components[0]);


    return (
        <div className="App">
            <label>Select<select onChange={(e) => setComp(e.target.value)}
                                 value={comp}>{compsVDOM}</select></label>
            {comp === 'Theme' && <Theme/>}
            {comp === 'Todo' && <Todo/>}
            {comp === 'Post' && <Post/>}
            {comp === 'Counter' && <Counter/>}
            {comp === 'Counter2' && <Counter2/>}
            {comp === 'Counter3' && <Counter3/>}
            {comp === 'Counter4' && <Counter4/>}
            {comp === 'Profile' && <Profile/>}
            {comp === 'Profile2' && <Profile2/>}
            {comp === 'CharLimit' && <CharLimit/>}
            {comp === 'RealUI' && <Wait ui='RealUI' placeholder='placeholder'/>}
            {comp === 'PostFetching' && <PostFetching/>}
            {comp === 'WindowDimensionCalculator' && <WindowDimensionCalculator/>}
            {comp === 'ThemeContextSample' && <ThemeContextSample/>}
            {comp === 'CounterWorkReducer' && <CounterWorkReducer/>}
            {comp === 'Focus2Comp' && <TextInputWithFocusButton/>}
            {comp === 'Focus2FancyComp' && <FancyInputWithFocusButton/>}


        </div>
    );
}

export default App;
