import React, {Component} from 'react';

class DooView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {visible} = this.props.visibilityMode;
        if (visible) {
            const {year, handleChange} = this.props;
            return (
                <div style={{width: '200px', borderColor: 'red', borderStyle: 'solid', margin: '2px'}}>
                    DOO View
                    <span>CurrentYear:{year}</span>
                    <input onChange={handleChange} type="text" name="year"/>
                </div>
            )
        } else {
            return (
                <></>
            )
        }

    }

}

export default DooView;