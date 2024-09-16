import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Verifica se o clique em cada rota renderiza os textos esperados na tela.', () => {
  it('deve renderizar o componente Home', () => {
    renderWithRouter (<App />);
    
     const homeTitle = screen.getByRole('link', {name: 'Home'});
     expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutTitle = screen.getByRole('link', {name: 'About'});
    expect(aboutTitle).toBeInTheDocument();
    userEvent.click(aboutTitle);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('deve renderizar o componente Projects', () => {
    const { history } =renderWithRouter (<App />);

    const projectsTitle = screen.getByRole('link', {name: 'Projects' });
    expect(projectsTitle).toBeInTheDocument();
    userEvent.click(projectsTitle);

    const { pathname } = history.location;
    expect(pathname).toBe('/projects');

  });

  it('deve renderizar o componente Contact', () => {
    const { history } =renderWithRouter (<App />);

    const contactTitle = screen.getByRole('link', {name: 'Contact'});
    expect(contactTitle).toBeInTheDocument();
    userEvent.click(contactTitle);
    
    const { pathname } = history.location;
    expect(pathname).toBe('/contact');
  });

});
