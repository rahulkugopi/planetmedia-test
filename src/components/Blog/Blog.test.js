import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from './Blog';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (jest.fn())
}));

describe('<Blog />', () => {
  test('it should mount', () => {
    render(<Blog />);    
    const blog = screen.getByTestId('Blog');
    expect(blog).toBeInTheDocument();
  });
});