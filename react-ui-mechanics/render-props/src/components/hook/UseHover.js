import React from 'react';
export function useHover () {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    const handlers = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }
    
    // Show a label in DevTools next to this Hook
    React.useDebugValue(hovering ? 'Hovering OK' : 'Hovering Not OK');
    return [hovering, handlers]
}
