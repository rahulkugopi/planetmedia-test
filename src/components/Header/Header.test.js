import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useLocation: () => (jest.fn())
}));

describe('<Header />', () => {
  test('it should mount', () => {
    render(<Header />);
    const header = screen.getByTestId('Header');
    expect(header).toBeInTheDocument();
  });  
});