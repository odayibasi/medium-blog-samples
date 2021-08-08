import {fireEvent, render, screen} from '@testing-library/react';
import {GreenComponent} from './GreenComponent';

test('render green component in document', () => {
	render(<GreenComponent/>);
	const defaultGreen = screen.getByTestId('default-green')
	expect(defaultGreen).toBeInTheDocument();
});


test('hover action works on blue component', () => {
	render(<GreenComponent/>);
	const defaultGreen = screen.getByTestId('default-green')
	fireEvent(defaultGreen,
		new MouseEvent('mouseover', {
			bubbles: true,
			cancelable: true,
		}),
	)
	const defaultGreenText = screen.getByText('GREEN')
	expect(defaultGreenText).toBeInTheDocument();

	fireEvent(defaultGreen,
		new MouseEvent('mouseout', {
			bubbles: true,
			cancelable: true,
		}),
	)
	expect(screen.queryByText('GREEN')).not.toBeInTheDocument();
});

