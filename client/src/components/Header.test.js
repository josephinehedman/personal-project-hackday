import Header from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
    test('renders header that matches snapshot', () => {
        const header = renderer
        .create(<BrowserRouter><Header/></BrowserRouter>)
        .toJSON();
       expect(header).toMatchSnapshot();
    });
});