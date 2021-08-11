import React from 'react';
import {BoxComponent} from "./BoxComponent";

export class InhRedComponent extends BoxComponent {

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
