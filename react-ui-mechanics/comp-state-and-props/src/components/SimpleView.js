import React, {Component,useState} from 'react';

export class SimpleClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {age: 30}
    }


    render() {
        const {age} = this.state;
        return (
            <div>
                <span>Age:{age}</span>
                <button onClick={() => this.setState({age: this.state.age + 1})}>Increase
                </button>
            </div>
        )
    }
}

export function SimpleHookComponent() {


    const [age, setAge] = useState(30);

    function onClick() {
        setAge(age + 1);
    }

    return (
        <div>
            Hook Component
            <br/>
            <span>Age:{age}</span>
            <button onClick={onClick}>Increase Age</button>
        </div>
    )

}


