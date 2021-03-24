import React from 'react';
import {BoxComponent} from "./BoxComponent";

export class InhBlueComponent extends BoxComponent {

    render() {
        const {hovering} = this.state;
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                 className='box' style={{backgroundColor: 'blue'}}>
                {hovering && <span>BLUE</span>}
            </div>
        );
    }
}
