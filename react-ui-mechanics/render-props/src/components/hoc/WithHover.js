import React from 'react';

export function withHover(Component){
    return class WithHover extends React.Component {

        state = {hovering: false}
        mouseOver = () => this.setState({hovering: true})
        mouseOut = () => this.setState({hovering: false})

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component hovering={this.state.hovering}/>
                </div>
            );
        }
    }
}





