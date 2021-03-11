import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test('shouled render all components/pages', () => {
    const app = shallow(<App />);
    expect(app.find('Header').exists()).toBeTruthy();
    expect(app.find('Home').exists()).toBeTruthy();
    expect(app.find('About').exists()).toBeTruthy();
    expect(app.find('Activity').exists()).toBeTruthy();
  });
})

