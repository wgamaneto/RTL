import React from 'react';
import { screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste da Pokedex', () => {
  it('teste de filtro', () => {
    renderWithRouter(<App />);
    const tipos = [
      'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const filtro = screen.getAllByTestId('pokemon-type-button');
    filtro.forEach((event, index) => {
      expect(event).toHaveTextContent(tipos[index]);
    });
  });
  it('teste do botão all', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();
    useEvent.click(all);
  });
});
