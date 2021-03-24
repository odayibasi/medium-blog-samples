import React from 'react';

export function RBlueComponent(props) {
    return (
        <div className='box' style={{backgroundColor: 'blue'}}>
            {props.hovering && <span>BLUE</span>}
        </div>
    );
}


