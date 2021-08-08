import {fireEvent, render, screen} from '@testing-library/react';
import {BlueComponent} from './BlueComponent';

test('render blue component in document', () => {
	render(<BlueComponent/>);
	const defaultBlue = screen.getByTestId('default-blue')
	expect(defaultBlue).toBeInTheDocument();
});


test('hover action works on blue component', () => {
	render(<BlueComponent/>);
	const defaultBlue = screen.getByTestId('default-blue')
	fireEvent(defaultBlue,
		new MouseEvent('mouseover', {
			bubbles: true,
			cancelable: true,
		}),
	)
	const defaultBlueText = screen.getByText('BLUE')
	expect(defaultBlueText).toBeInTheDocument();

	fireEvent(defaultBlue,
		new MouseEvent('mouseout', {
			bubbles: true,
			cancelable: true,
		}),
	)
	expect(screen.queryByText('BLUE')).not.toBeInTheDocument();
});

