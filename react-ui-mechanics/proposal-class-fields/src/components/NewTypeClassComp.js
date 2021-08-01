import React from 'react';
import PropTypes from 'prop-types';

export class NewTypeClassComp extends React.Component {

	state = {age: 30}
	
	//Public
	name = 'onur';
	
	//Private
	#namePrivate = 'ali';
	getName(){
		return this.#namePrivate;
	}
	
	
	
	static propTypes = {
		year: PropTypes.number.isRequired,
	}

	handleClick = () => {
		this.setState({age: this.state.age + 1});
	}

	render() {
		const {age} = this.state;
		const {year} = this.props;
		return (
			<div>
				New Class Component
				<br/>
				<span>Age:{age}</span>
				<span>Birth:{year - age}</span>
				<button onClick={this.handleClick}>Increase Age</button>
			</div>
		);
	}
}




