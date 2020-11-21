import React, {Component} from 'react';

class SooView extends Component {

    render() {
        const {visible} = this.props.visibilityMode;
        const msg = visible ? 'TRUE' : 'FALSE'
        return (
            <div style={{width: '200px', borderColor: 'blue', borderStyle: 'solid', margin: '2px'}}>
                Redux Soo View

                <div>
                    {msg}
                    <button onClick={this.props.showViews}>Show</button>
                    <button onClick={this.props.hideViews}>Hide</button>
                </div>

            </div>
        )
    }

}

export default SooView;