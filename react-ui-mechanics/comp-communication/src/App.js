import './App.css';
import React, {Component} from 'react';
import FooView from '../src/components/FooView'
import DooView from '../src/components/DooView'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {year: 2010}
    }


    handleChange = (e) => {
        const val = e.target.value;
        if (!isNaN(val)) {
            this.setState({year: val});
        }
    }


    render() {

        const {year} = this.state;

        return (
            <div className="App">
                <FooView year={year}/>
                <DooView handleChange={this.handleChange}
                         year={year}
                />
            </div>
        );

    }

}

export default App;
