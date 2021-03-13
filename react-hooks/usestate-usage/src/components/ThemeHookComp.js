import React, {useState} from "react";

export function ThemeHook() {
    console.log('Enter Again')
    const [theme, setTheme] = useState('light')

    const toDark = () => {
        console.log('set Dark')
        setTheme('dark')
    }

    const toLight = () => {
        console.log('set Light')
        setTheme('light')
    }

    return (
        <div className={theme}>
            {theme === "light"
                ? <button onClick={toDark}>🔦</button>
                : <button onClick={toLight}>💡</button>}
        </div>
    )
}
