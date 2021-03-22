import './App.css';
import {LoginForm} from "./components/LoginForm";
import {NameForm, UncontrolledNameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";
import {FileForm} from "./components/FileForm";

function App() {
    return (
        <div className="App">
            <div className='form-container'>
                <NameForm/>
                <EssayForm/>
                <FlavorForm/>
                <LoginForm/>
            </div>
            <div>
                <UncontrolledNameForm/>
                <FileForm/>
            </div>

        </div>
    );
}

export default App;
