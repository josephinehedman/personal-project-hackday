import renderer from 'react-test-renderer';
import Button from './Button'

describe('Button component', () => {
    test('should render the button component and match snapshot', () => {
        const participants = 2;
        const getData = jest.fn();
        const button = renderer.create(<Button />).toJSON();
        expect(button).toMatchSnapshot();
    });
});