import {render, screen} from '@testing-library/react';
import App from './App';

test('render learn default components', () => {
	render(<App/>);
	const defaultBlue = screen.getByTestId('default-blue')
	expect(defaultBlue).toBeInTheDocument();
	const defaultGreen = screen.getByTestId('default-green')
	expect(defaultGreen).toBeInTheDocument();
	const defaultRed = screen.getByTestId('default-red')
	expect(defaultRed).toBeInTheDocument();
});
