import { render, screen } from '@testing-library/react';
import Activity from './Activity';

describe('Activity component', () => {
    const getData = jest.fn();

    test('should render activity generator heading', () => {
        const activity = {
            accessibility: 0.1,
            activity: 'Write tests for your javascript applications',
            price: 0
        };
        render(<Activity getData={getData} activity={activity}/>);
        expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Activity Generator');
    });
    test('should render error message if activity not found', () => {
        const activity = {
            error: 'Not found'
        };
        render(<Activity getData={getData} activity={activity}/>);
        expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Sorry, Couldn\'t get your activity. Please try again');
    })
})