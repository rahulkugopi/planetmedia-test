import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogDetails from './BlogDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (jest.fn())
}));

describe('<BlogDetails />', () => {
  test('it should mount', () => {
    render(<BlogDetails />);    
    const blogDetails = screen.getByTestId('BlogDetails');
    expect(blogDetails).toBeInTheDocument();
  });
});