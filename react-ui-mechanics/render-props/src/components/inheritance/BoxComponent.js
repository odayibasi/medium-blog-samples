import React, {Component} from 'react';

export class BoxComponent extends Component {

    state = {hovering: false}
    mouseOver = () => this.setState({hovering: true})
    mouseOut = () => this.setState({hovering: false})

    render() {
        return (
            <div>PARENT</div>
        );
    }
}
