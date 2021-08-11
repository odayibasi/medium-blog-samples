//This Sample Copied from https://codesandbox.io/s/scss-theming-bebm7
//Blog posts https://medium.com/@sroskelley/theming-in-sass-67b8c0265e3f

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ToggleButton from "./ToggleButton";
import $ from "jquery";


import "./index.scss";

$("html").addClass("light");

function App() {
	const [lightTextValue, setLightTextValue] = useState("");
	const [darkTextValue, setDarkTextValue] = useState("");

	const updateLight = value => {
		setLightTextValue(value);
		setTheme(value, "textLight", "light");
	};

	const updateDark = value => {
		setDarkTextValue(value);
		setTheme(value, "textLight", "dark");
	};

	return (
		<div className="App">
			<ToggleButton />
			<div className="textFieldArea">
				<h4>custom textLight</h4>

				<label>light theme</label>
				<input
					type="text"
					onChange={e => updateLight(e.target.value)}
					value={lightTextValue}
					placeholder="Enter CSS color"
				/>

				<label>dark theme</label>
				<input
					type="text"
					onChange={e => updateDark(e.target.value)}
					value={darkTextValue}
					placeholder="Enter CSS color"
				/>
			</div>
		</div>
	);
}

function setTheme(value, variable, theme) {
	/* This method should be called to initialize, update, or remove user custom theme variables.
		 It essentially adds a new style script in the head of the page (thus lower than the html
		 defaults), which in turn applies the new styles to all theme variables
	*/

	let el = window.themeStylesEl
		? window.themeStylesEl
		: document.createElement("style");
	if (!window.themeStylesEl) {
		window.themeStylesEl = el;
		document.head.appendChild(window.themeStylesEl);
	}
	let themeVars = [];
	themeVars.push(`--theme-${theme}-${variable}: ${value};`);
	window.themeStylesEl.innerHTML = `
    html {
      ${themeVars.join("\n")}
    }
  `;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
