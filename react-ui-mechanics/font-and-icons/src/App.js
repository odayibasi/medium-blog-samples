import './App.css';
import {FontAwesomeIconSample} from "./components/FontAwesomeIconSample";
import {ReactIconSample} from "./components/ReactIconSample";
import {SVGSample} from "./components/SVGSample";
import {SampleFontSet} from "./components/SampleFontSet";


function App() {
    return (
        <div className="App">
            <div className='my-container'>Hello World</div>
            <div className='my-fontawesome'>
                <FontAwesomeIconSample/>
            </div>
            <div className='my-react-icon'>
                <ReactIconSample/>
            </div>
            <div className='my-svg-icon'>
                <SVGSample/>
            </div>
            <div className='my-font-set'>
                <SampleFontSet/>
            </div>
        </div>
    );
}

export default App;
