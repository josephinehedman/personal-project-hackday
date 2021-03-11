import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
    test('Should render heading and table', () => {
        render(<About />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});