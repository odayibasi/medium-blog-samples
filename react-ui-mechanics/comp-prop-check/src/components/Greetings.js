import PropTypes from 'prop-types';
import React from 'react';
export class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};
