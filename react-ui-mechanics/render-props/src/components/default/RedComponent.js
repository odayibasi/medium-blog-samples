import React, {Component} from 'react';

export class RedComponent extends Component {

	state = {hovering: false}
	mouseOver = () => this.setState({hovering: true})
	mouseOut = () => this.setState({hovering: false})

	render() {
		const {hovering} = this.state;
		return (
			<div data-testid='default-red' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
			     className='box' style={{backgroundColor: 'red'}}>
				{hovering && <span>RED</span>}
			</div>
		);
	}
}
