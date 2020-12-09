import './App.css';
import {FunctionComponentA, FunctionComponentB, FunctionComponentC,ClassComponent,HookComponent} from "./components/index";



import FunctionComponentExportA, {
    FunctionComponentExportB,
    FunctionComponentExportC
} from "./components/stateless/FunctionComponentsExport";


import
{
    FunctionComponentExportA as FCompA,
    FunctionComponentExportB as FCompB,
    FunctionComponentExportC as FCompC
} from "./components/stateless/FunctionComponentsAbbr";




function App() {

    return (
        <div className={'app-container'}>
            <div className="function-components-container container">
                <FunctionComponentA/>
                <FunctionComponentB/>
                <FunctionComponentC name={"Onur"} surname={'Dayi'}/>
            </div>
            <div className="function-components-export-container container">
                <FunctionComponentExportA/>
                <FunctionComponentExportB/>
                <FunctionComponentExportC name={"Onur"} surname={'Dayi'}/>
            </div>
            <div className="function-components-abbr-container container">
                <FCompA/>
                <FCompB/>
                <FCompC name={"Onur"} surname={'Dayi'}/>
            </div>

            <div className="function-components-state container">
                <ClassComponent/>
                <HookComponent/>
            </div>

        </div>
    );
}

export default App;
