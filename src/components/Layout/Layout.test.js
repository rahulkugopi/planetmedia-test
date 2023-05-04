import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Layout from './Layout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (jest.fn())
}));

describe('<Layout />', () => {
  test('it should mount', () => {
    render(<Layout />);    
    const layout = screen.getByTestId('Layout');
    expect(layout).toBeInTheDocument();
  });
});