//This code from https://codesandbox.io/s/usestate-hooks-example-j5del?file=/src/styles.css:0-201
import React from "react";

export function Theme() {
    const [theme, setTheme] = React.useState('light')

    const toDark = () => setTheme('dark')
    const toLight = () => setTheme('light')

    return (
        <div className={theme}>
            {theme === "light"
                ? <button onClick={toDark}>🔦</button>
                : <button onClick={toLight}>💡</button>}
        </div>
    )
}

