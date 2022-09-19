import React from 'react';
import { screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste do Pokemon', () => {
  it('teste dp src', () => {
    renderWithRouter(<App />);
    const src = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagem = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe(src);
  });
  it('teste de testo do tipo', () => {
    renderWithRouter(<App />);
    const tipo = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(tipo.innerHTML).toBe('Electric');
  });
  it('teste de src e alt', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: 'More details' });
    useEvent.click(maisDetalhes);
    const favorito = screen.getByLabelText('Pokémon favoritado?');
    useEvent.click(favorito);
    const src = 'http://localhost/star-icon.svg';
    const favo = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(favo).toBeInTheDocument();
    expect(favo.src).toBe(src);
  });
  it('teste de redirecionamento', () => {
    const { history } = renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: 'More details' });
    useEvent.click(maisDetalhes);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
});
