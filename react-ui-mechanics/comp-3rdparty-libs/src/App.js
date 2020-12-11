import './App.css';
import {
    ButtonEmphasis, ButtonAnimated, ButtonLoading,
    DropdownMultipleSearchSelection,RatingStar
} from './components/SemanticUI'

function App() {
    return (
        <div className="App">
            3rd Parties
            <div className={'container'}>
                BUTTON
                <ButtonEmphasis/>
                <ButtonAnimated/>
                <ButtonLoading/>
            </div>
            <div className={'container'}>
                OTHER
                <DropdownMultipleSearchSelection/>
                <RatingStar/>
            </div>
        </div>
    );
}

export default App;
