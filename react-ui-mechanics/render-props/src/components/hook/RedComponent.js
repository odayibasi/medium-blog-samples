import React from 'react';
import {useHover} from "./UseHover";

export function HRedComponent() {

    const [hovering,handlers] = useHover();
    const {onMouseOver, onMouseOut} = handlers;

    return (
        <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} className='box' style={{backgroundColor: 'red'}}>
            {hovering && <span>RED</span>}
        </div>
    );
}





