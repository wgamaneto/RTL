import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('teste do FavoritePokemon', () => {
  it('mensagem de not found', () => {
    renderWithRouter(<FavoritePokemons />);
    const not = screen.getByText('No favorite pokemon found');
    expect(not).toBeInTheDocument();
  });
});
