import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste do PokemonDetails', () => {
  it('teste das info detalhadas', () => {
    renderWithRouter(<App />);

    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    expect(maisDetalhes).toBeInTheDocument();

    userEvent.click(maisDetalhes);

    const pokemon = 'Pikachu';
    const page = `${pokemon} Details`;
    const local = `Game Locations of ${pokemon}`;
    const h2 = screen
      .getByRole('heading', { name: page, level: 2 });
    const h2Role = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const lugar = screen.getByRole('heading', { name: local, level: 2 });

    expect(h2).toHaveTextContent(page);
    expect(h2Role).toHaveTextContent(/summary/i);
    expect(lugar).toHaveTextContent(local);
  });

  it('teste do pokemom favorito', () => {
    renderWithRouter(<App />);

    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const labelIsFavoritePokemon = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(labelIsFavoritePokemon).toBeInTheDocument();
  });

  it('testand imagens e localizacao', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);

    const scr1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const scr2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    const links = [scr1, scr2];
    const imagem = screen.getAllByAltText(/pikachu location/i);

    imagem.forEach((event, index) => {
      expect(event).toBeInTheDocument();
      expect(event.src).toEqual(links[index]);
      expect(event.alt).toEqual('Pikachu location');
    });
  });
});
