import {fireEvent, render, screen} from '@testing-library/react';
import {HocBlueComponent} from "./BlueComponent";

test('Render Component to Document', () => {
	render(<HocBlueComponent/>);
	const hocBlue = screen.getByTestId('hoc-blue');
	expect(hocBlue).toBeInTheDocument();
})

test('According to Hovering Props Display Not', () => {
	render(<HocBlueComponent hovering={false}/>)
	expect(screen.queryByText('BLUE')).not.toBeInTheDocument();
})

test('According to Hovering Props Display', () => {
	render(<HocBlueComponent/>)

	const hocBlue = screen.getByTestId('hoc-blue')
	fireEvent(hocBlue,
		new MouseEvent('mouseover', {
			bubbles: true,
			cancelable: true,
		}),
	)
	
	expect(screen.queryByText('BLUE')).toBeInTheDocument();
})

