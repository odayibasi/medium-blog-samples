import React from "react";


const themes = {
    light: {foreground: "#000000", background: "#eeeeee"},
    dark: {foreground: "#ffffff", background: "#222222"}
};

const ThemeContext = React.createContext(themes.light);

export function ThemeContextSample() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
}

function ThemedButton() {
    const theme = React.useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am styled by theme context!
        </button>
    );
}
