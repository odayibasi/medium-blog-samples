import React from 'react';
import {withHover} from "./WithHover";

function BlueComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'blue'}}>
            {props.hovering && <span>BLUE</span>}
        </div>
    );
}


export const HocBlueComponent = withHover(BlueComponent);
