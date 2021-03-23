import './App.css';
import {LoginForm} from "./components/LoginForm";
import {NameForm, UncontrolledNameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";
import {FileForm} from "./components/FileForm";
import {CustomTextInput} from "./components/CustomInputText";

function App() {
    return (
        <div className="App">
            <div className='form-container'>
                <NameForm/>
                <EssayForm/>
                <FlavorForm/>
                <LoginForm/>
            </div>
            <div className='form-container'>
                <UncontrolledNameForm/>
                <FileForm/>
            </div>
            <div className='form-container'>
                 <CustomTextInput/>
            </div>

        </div>
    );
}

export default App;
