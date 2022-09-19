import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do App.js', () => {
  it('home, about e favourite', () => {
    const clicks = ['Home', 'About', 'Favorite Pokémons'];
    renderWithRouter(<App />);
    clicks.forEach((element) => {
      const link = screen.getByRole('link', { name: element });
      expect(link).toBeInTheDocument();
    });
  });
  it('testa ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });
  it('testa ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });
  it('testa ao clicar em Favourite', () => {
    const { history } = renderWithRouter(<App />);
    const favourite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favourite).toBeInTheDocument();
    userEvent.click(favourite);
    expect(history.location.pathname).toBe('/favorites');
  });
});
