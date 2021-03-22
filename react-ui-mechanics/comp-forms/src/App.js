import './App.css';
import {LoginForm} from "./components/LoginForm";
import {NameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";

function App() {
    return (
        <div className="App">
            <NameForm/>
            <EssayForm/>
            <FlavorForm/>
            <LoginForm/>
        </div>
    );
}

export default App;
