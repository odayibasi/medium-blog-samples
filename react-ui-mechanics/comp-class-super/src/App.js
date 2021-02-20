import './App.css';
import {SimpleComp, FuncComp, Simple2Comp} from "./components/SimpleComp";

function App() {
    return (
        <div className="App">
            <SimpleComp name='onur'/>
            <Simple2Comp name='onur2'/>
            <FuncComp name='deniz'/>
        </div>
    );
}

export default App;
