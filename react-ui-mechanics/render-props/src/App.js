import './App.css';

//Default
import {BlueComponent} from "./components/default/BlueComponent";
import {GreenComponent} from "./components/default/GreenComponent";
import {RedComponent} from "./components/default/RedComponent";

//Inheritance
import {InhBlueComponent} from "./components/inheritance/BlueComponent";
import {InhGreenComponent} from "./components/inheritance/GreenComponent";
import {InhRedComponent} from "./components/inheritance/RedComponent";

//High Order Components
import {HocBlueComponent} from "./components/hoc/BlueComponent";
import {HocGreenComponent} from "./components/hoc/GreenComponent";
import {HocRedComponent} from "./components/hoc/RedComponent";

//RenderProps
import {RBlueComponent} from "./components/renderprops/BlueComponent";
import {RGreenComponent} from "./components/renderprops/GreenComponent";
import {RRedComponent} from "./components/renderprops/RedComponent";
import {Hover} from "./components/renderprops/Hover";

//Hooks
import {HBlueComponent} from "./components/hook/BlueComponent";
import {HGreenComponent} from "./components/hook/GreenComponent";
import {HRedComponent} from "./components/hook/RedComponent";


function App() {
    return (
        <div className="App">
            <div className='row-container'>
                <strong>Default</strong>
                <BlueComponent/>
                <GreenComponent/>
                <RedComponent/>
            </div>

            <div className='row-container'>
                <strong>Inheritance</strong>
                <InhBlueComponent/>
                <InhGreenComponent/>
                <InhRedComponent/>
            </div>

            <div className='row-container'>
                <strong>HoC</strong>
                <HocBlueComponent/>
                <HocGreenComponent/>
                <HocRedComponent/>
            </div>


            <div className='row-container'>
                <strong>RenderProps</strong>
                <Hover>{(hovering) => <RBlueComponent hovering={hovering}/>}</Hover>
                <Hover>{(hovering) => <RGreenComponent hovering={hovering}/>}</Hover>
                <Hover>{(hovering) => <RRedComponent hovering={hovering}/>}</Hover>
            </div>

            <div className='row-container'>
                <strong>Hooks</strong>
                <HBlueComponent/>
                <HGreenComponent/>
                <HRedComponent/>
            </div>



        </div>
    );
}

export default App;
