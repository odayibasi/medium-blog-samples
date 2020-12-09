import './App.css';
import {FunctionComponentA, FunctionComponentB, FunctionComponentC} from "./components/stateless/FunctionComponents";
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
        <>
            <div className="function-components-container">
                <FunctionComponentA/>
                <FunctionComponentB/>
                <FunctionComponentC name={"Onur"} surname={'Dayi'}/>
            </div>
            <div className="function-components-export-container">
                <FunctionComponentExportA/>
                <FunctionComponentExportB/>
                <FunctionComponentExportC name={"Onur"} surname={'Dayi'}/>
            </div>
            <div className="function-components-abbr-container">
                <FCompA/>
                <FCompB/>
                <FCompC name={"Onur"} surname={'Dayi'}/>
            </div>

        </>
    );
}

export default App;
