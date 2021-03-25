import React from 'react';

export class Hover extends React.Component {

    state = {hovering: false}
    mouseOver = () => this.setState({hovering: true})
    mouseOut = () => this.setState({hovering: false})

    render() {
        const {render}=this.props;
        if(render){
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    {this.props.render(this.state.hovering)}
                </div>
            );

        }else{
            return ('');
        }
    }

}





