import {fireEvent, render, screen} from '@testing-library/react';
import {RedComponent} from './RedComponent';

test('render green component in document', () => {
	render(<RedComponent/>);
	const defaultRed = screen.getByTestId('default-red')
	expect(defaultRed).toBeInTheDocument();
});


test('hover action works on blue component', () => {
	render(<RedComponent/>);
	const defaultRed = screen.getByTestId('default-red')
	fireEvent(defaultRed,
		new MouseEvent('mouseover', {
			bubbles: true,
			cancelable: true,
		}),
	)
	const defaultRedText = screen.getByText('RED')
	expect(defaultRedText).toBeInTheDocument();

	fireEvent(defaultRed,
		new MouseEvent('mouseout', {
			bubbles: true,
			cancelable: true,
		}),
	)
	expect(screen.queryByText('RED')).not.toBeInTheDocument();
});

