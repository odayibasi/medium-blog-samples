import React from 'react';

export function RGreenComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'green'}}>
            {props.hovering && <span>GREEN</span>}
        </div>
    );
}


