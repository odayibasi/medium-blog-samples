import React, {Component} from 'react';

export class InhRedComponent extends Component {

    state = {hovering: false}
    mouseOver = () => this.setState({hovering: true})
    mouseOut = () => this.setState({hovering: false})

    render() {
        const {hovering} = this.state;
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                 className='box' style={{backgroundColor: 'red'}}>
                {hovering && <span>RED</span>}
            </div>
        );
    }
}
