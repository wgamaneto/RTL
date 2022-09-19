import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('teste do About.js', () => {
  it('teste de info ds h2', () => {
    renderWithRouter(<About />);
    const about = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(about).toBeInTheDocument();
  });
  test('Se página contém a imagem correta', () => {
    renderWithRouter(<About />);
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(src);
  });
});
