import React from 'react';
import {useHover} from "./UseHover";

export function HBlueComponent() {

    const [hovering, handlers] = useHover();
    const {onMouseOver, onMouseOut} = handlers;

    return (
        <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} className='box' style={{backgroundColor: 'blue'}}>
            {hovering && <span>BLUE</span>}
        </div>
    );
}





