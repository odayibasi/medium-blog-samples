import './App.css';
import {Theme, Todo, Post} from "./components/useStateUsage";
import {
    Counter,
    Counter2,
    Counter3,
    Counter4,
    Profile,
    Profile2,
    CharLimit,
    Wait,
    PostFetching
} from "./components/useEffectUsage";
import React from "react";

const components = ['Theme', 'Todo', 'Post', 'Counter', 'Counter2', 'Counter3', 'Counter4', 'Profile', 'Profile2', 'CharLimit', 'Wait', 'PostFetching'];
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


        </div>
    );
}

export default App;
