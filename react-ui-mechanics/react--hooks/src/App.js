import './App.css';
import {Theme, Todo, Post} from "./components/useStateUsage";
import {Counter, Profile, CharLimit,Wait} from "./components/useEffectUsage";

function App() {
    return (
        <div className="App">
            {/*<Theme/>*/}
            {/*<Todo/>*/}
            {/*<Post/>*/}
            {/*<Counter/>*/}
            {/*<Profile/>*/}
            {/*<CharLimit/>*/}
            <Wait ui='RealUI' placeholder='placeholder'/>
        </div>
    );
}

export default App;
