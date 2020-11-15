import React, {Component} from 'react';

class FooView extends Component {

    constructor(props) {
        super(props);
        this.state = {age: 30}
    }


    handleClick = (e) => {
        this.setState({age: this.state.age + 1});
    }


    render() {
        const {age} = this.state;
        const {year} = this.props;
        const birthYear = year - age;
        return (
            <div>
                <span>Age:{age}</span>
                <span>BirthYear:{birthYear}</span>
                <button onClick={this.handleClick}>Increase Age</button>
            </div>
        )
    }

}

export default FooView;