import Home from './Home';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Home component', () => {
    test('should render Button component', () => {
      const home = shallow(<Home />);
      expect(home.find('Button').exists()).toBeTruthy();
    });

    test('should render heading', () => {
        const getData = jest.fn();
        render(<Home getData={getData}/>);
        expect(screen.getByRole('heading')).toBeInTheDocument(); 
    });
  })