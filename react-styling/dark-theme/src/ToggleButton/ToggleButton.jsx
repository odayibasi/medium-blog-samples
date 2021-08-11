import React, { useState } from "react";
import $ from "jquery";

import styles from "./toggleButton.scss";

const ToggleButton = () => {
	const [currTheme, setCurrTheme] = useState("light");

	const toggleTheme = () => {
		const htmlEl = $("html");
		const currClass = htmlEl.attr("class");
		if (currClass === "light") {
			htmlEl.addClass("dark").removeClass("light");
			setCurrTheme("dark");
		} else {
			htmlEl.addClass("light").removeClass("dark");
			setCurrTheme("light");
		}
	};

	return (
		<div>
			<button className="myButton" onClick={toggleTheme}>
				Toggle Light/Dark Theme
			</button>

			<div className="currTheme">Current Theme: {currTheme}</div>
		</div>
	);
};

export default ToggleButton;
