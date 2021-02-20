import React, {Component} from 'react';

export class SimpleComp extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export class Simple2Comp extends Component {

    constructor() {
        super();
        this.state = {counter: 0}
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}


export class Simple3Comp extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}


export const FuncComp = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

