import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class StandardClassComp extends Component {

	constructor(props) {
		super(props);
		this.state = {age: 30}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({age: this.state.age + 1});
	}

	render() {
		const {age} = this.state;
		const {year} = this.props;
		return (
			<div className={'class-component-container'}>
				Standart Class Component
				<br/>
				<span>Age:{age}</span>
				<span>Birth:{year - age}</span>
				<button onClick={this.handleClick}>Increase Age</button>
			</div>
		)
	}

}

StandardClassComp.propTypes = {
	year: PropTypes.number.isRequired,
}

