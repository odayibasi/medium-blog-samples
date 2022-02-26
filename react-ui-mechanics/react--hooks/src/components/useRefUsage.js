import React, {forwardRef, useImperativeHandle, useRef} from "react";

function FancyInput(props, ref) {
	const inputRef = useRef();
	useImperativeHandle(ref, () => ({
		myFocus: () => {
			inputRef.current.focus();
		}
	}));
	return <input ref={inputRef}/>;
}
const FancyInputWithAPI = forwardRef(FancyInput);



export function FancyInputWithFocusButton() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.myFocus();
	};

	return (
		<>
			<FancyInputWithAPI ref={inputEl} type="text"/>
			<button onClick={onButtonClick}>Focus the input</button>
		</>
	);
}


export function TextInputWithFocusButton() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
	};
	return (
		<>
			<input ref={inputEl} type="text"/>
			<button onClick={onButtonClick}>Focus the input</button>
		</>
	);
}