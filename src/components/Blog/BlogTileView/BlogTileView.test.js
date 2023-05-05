import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogTileView from './BlogTileView';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (jest.fn())
}));

describe('<BlogTileView />', () => {
  test('it should mount', () => {
    render(<BlogTileView />);    
    const blogTileView = screen.getByTestId('BlogTileView');
    expect(blogTileView).toBeInTheDocument();
  });
});