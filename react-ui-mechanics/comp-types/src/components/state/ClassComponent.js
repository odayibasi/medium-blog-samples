import React, {Component} from 'react';
import  "./ClassComponent.scss"

export class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {age: 30}
    }

    handleClick = (e) => {
        this.setState({age: this.state.age + 1});
    }


    render() {
        const {age} = this.state;
        return (
            <div className={'class-component-container'}>
                Class Component
                <br/>
                <span>Age:{age}</span>
                <button onClick={this.handleClick}>Increase Age</button>
            </div>
        )
    }

}

