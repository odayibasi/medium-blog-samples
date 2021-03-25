import React from 'react';
import {useHover} from "./UseHover";

export function HGreenComponent() {

    const [hovering,handlers] = useHover();
    const {onMouseOver, onMouseOut} = handlers;

    return (
        <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} className='box' style={{backgroundColor: 'green'}}>
            {hovering && <span>GREEN</span>}
        </div>
    );
}





