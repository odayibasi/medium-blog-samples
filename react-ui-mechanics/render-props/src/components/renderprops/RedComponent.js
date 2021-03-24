import React from 'react';

export function RRedComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'red'}}>
            {props.hovering && <span>RED</span>}
        </div>
    );
}


