import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (jest.fn())
}));

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);    
    const home = screen.getByTestId('Home');
    expect(home).toBeInTheDocument();
  });
});