import './App.css';
import {ThemeClass} from "./components/ThemeClassComp";
import {ThemeHook} from "./components/ThemeHookComp";
import {TodoHookComp} from "./components/TodoHookComp";

function App() {
    return (
        <div className="App">
            {/*<ThemeClass/>*/}
            {/*<ThemeHook/>*/}
            <TodoHookComp/>
        </div>
    );
}

export default App;
