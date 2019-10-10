import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return(

 <header className="site-header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light py-3" aria-label="Main navigation">
      <a className="navbar-brand text-dark" href="index-2.html">
        {/* <img src="img/logo.png" alt="Boost Theme" /> */}
        <h2>Carvalho <span class="e-logo">&</span> Oliveira</h2>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars fa-lg" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-lg-center text-uppercase pt-3 pt-lg-0 ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#atuacao">Áreas de atuação</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#quemsomos">Quem somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">Contato</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

);
}
}

