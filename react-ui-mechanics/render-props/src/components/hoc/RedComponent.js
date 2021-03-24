import React from 'react';
import {withHover} from "./WithHover";

function RedComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'red'}}>
            {props.hovering && <span>RED</span>}
        </div>
    );
}


export const HocRedComponent = withHover(RedComponent);
