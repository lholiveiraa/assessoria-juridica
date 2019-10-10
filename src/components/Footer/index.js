import React, { Component } from 'react';

export default class Footer extends Component {

    render () {
        return (
            
<footer className="site-footer mt-5">
  <div className="container">
    <div className="row justify-content-md-between">
      <div className="col-sm-12 col-md-4 mb-4">
        <h3 className="h5 mb-3">Carvalho <span class="e-logo">&</span>  Oliveira <br />Assessoria Jurídica</h3>
        <p>Especialistas em redução de juros e contratos abusivos.</p>
      </div>
      <div className="col-4 col-md-2 mb-4">
        <h3 className="h5 mb-3">Sobre</h3>
        <ul className="nav flex-column">
          <li className="mb-1"><a href="#quemsomos">Quem somos</a></li>
          <li className="mb-1"><a href="#atuacao">Áreas de atuação</a></li>
          <li className="mb-1"><a href="#contato">Fale conosco</a></li>
          <li className="mb-1"><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      
    </div>
    <hr className="m-0" role="presentation" />
    <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-4">
      <p className="small text-muted">© Carvalho & Oliveira Assessoria Jurídica 2019</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a className="icon icon-sm icon-secondary" href="#"><i className="icon-inner fab fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a>
        </li>
        <li className="list-inline-item">
          <a className="icon icon-sm icon-secondary" href="#"><i className="icon-inner fab fa-facebook-f" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
        </li>
      </ul>
    </div>
  </div>
</footer>

        );
    }


}