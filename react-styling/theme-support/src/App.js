import './App.css';
import React from 'react';
import {StyledComponent} from "./components/StyledComponent";


function App() {

	const [theme, setTheme] = React.useState('light')

	const toDark = () => {
		setTheme('dark')
		document.documentElement.setAttribute("data-theme", "dark");
	}
	const toLight = () => {
		setTheme('light')
		document.documentElement.setAttribute("data-theme", "light");
	}


	return (
		<div className="App">
			<StyledComponent/>
			<div className={theme}>
				{theme === "light"
					? <button onClick={toDark}>🔦</button>
					: <button onClick={toLight}>💡</button>}
			</div>
		</div>
	);
}

export default App;
