import './App.css';
import {
    ButtonEmphasis, ButtonAnimated, ButtonLoading,
    DropdownMultipleSearchSelection,RatingStar,
} from './components/SemanticUI'

import {
    JointLineScatterChart,
    SimpleLineChart
} from './components/ReChart'



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

            <div className={'container'}>
                RECHART
                <SimpleLineChart/>
                <JointLineScatterChart/>
            </div>
        </div>
    );
}

export default App;
