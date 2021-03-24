import React from 'react';
import {withHover} from "./WithHover";

function GreenComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'green'}}>
            {props.hovering && <span>GREEN</span>}
        </div>
    );
}


export const HocGreenComponent = withHover(GreenComponent);
