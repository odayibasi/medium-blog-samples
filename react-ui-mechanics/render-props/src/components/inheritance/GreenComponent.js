import React from 'react';
import {BoxComponent} from "./BoxComponent";

export class InhGreenComponent extends BoxComponent {
    
    render() {
        const {hovering} = this.state;
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                 className='box' style={{backgroundColor: 'green'}}>
                {hovering && <span>GREEN</span>}
            </div>
        );
    }
}
