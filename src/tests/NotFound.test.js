import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('teste do NotFound', () => {
  it('texta info com h2', () => {
    renderWithRouter(<NotFound />);
    const not = screen.getByRole(
      'heading',
      { name: 'Page requested not found', level: 2 },
    );
    expect(not).toBeInTheDocument();
  });
  it('teste de src', () => {
    renderWithRouter(<NotFound />);
    const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const not = screen.getByRole('img', { name: /pikachu/i });
    expect(not).toBeInTheDocument();
    expect(not.src).toBe(src);
  });
});
