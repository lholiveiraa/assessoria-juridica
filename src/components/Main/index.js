import React, { Component } from 'react';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }


    render() {

        return (

<main id="main">
  {/* Hero */}
  <section className="container" id="topo">
    <div className="row justify-content-lg-between align-items-lg-center py-5">
      <div className="col-lg-6 text-center text-lg-left">
        <h1 className="display-4 mb-4">Problemas com o financiamento do seu veículo?</h1>
        <p className="lead text-secondary mb-4">Nós podemos te ajudar a reduzir em até 80% o que você vem pagando.</p>
        <a className="btn btn-pill btn-primary btn-block d-md-inline-block w-auto mr-md-4 mb-4 mb-md-0" href="#">Entre em contato</a>
      </div>
      <div className="col-lg-6">
        <img src="img/topo.png" className="img-fluid d-none d-lg-block" alt />
      </div>
    </div>
  </section>
  <br />
  <br />
  <div className="bg-skew bg-skew-light">
        {/* Quem somos */}
  <section className="container" id="quemsomos">
    <div className="row py-4">
      <div className="col-sm-12 col-md-12 mb-4 mb-md-12">
        <div className="pr-lg-3">

          <h1>Quem somos</h1>
          <p>Fundado em 2010, o escritório Carvalho & Oliveira Assessoria Jurídica, com sede na Cidade de Nilópolis, RJ, hoje é considerado referência em ações revisionais, defesa do consumidor e trabalhista, sendo um dos escritórios mais destacados do Estado do Rio de Janeiro, possuindo sólida reputação e uma carteira de clientes totalmente satisfeitos.</p>

<p>Atuamos primordialmente, no seguimento de Revisões de Contratos de Financiamentos de Veículos e Empréstimos Pessoais, abrangendo toda área de Defesa do Consumidor, e também nas áreas Cível, Família e Trabalhista, com estrutura operacional dinâmica, levando a nossos clientes acesso direto a Justiça com total segurança e eficiência durante toda a tramitação processual, com excelência de atendimento e informação.</p>

<p>Contamos com profissionais capacitados e gabaritados, garantindo assim, benefícios práticos para nossa carteira de clientes.</p>

<p>Nossos clientes jamais deixarão nossas dependências sem a indicação clara do caminho a percorrer para a devida solução de seus problemas em qualquer área do direito.</p>
        </div>
      </div>

    </div>
    <br />
    <br />
    <br />
  </section>
    
  </div>

{/* Áreas de atuação */}
    <section className="container" id="atuacao">
    <h1>Áreas de atuação</h1>
      <div className="row py-5">
        <div className="col-lg-6 mb-4">
          <a href="app.html" className="stretched-link">
            <img src="img/civel.png" className="img-fluid img-thumbnail img-thumbnail-hover mb-4" alt="App demo" />
            <h2 className="h5 text-center text-dark">Cível</h2>
          </a>
        </div>
        <div className="col-lg-6 mb-4">
          <a href="course.html" className="stretched-link">
            <img src="img/consumidor.png" className="img-fluid img-thumbnail mb-4" alt="Course demo" />
            <h2 className="h5 text-center text-dark">Direitos do consumidor</h2>
          </a>
        </div>
        <div className="col-lg-6 mb-4">
          <a href="event.html" className="stretched-link">
            <img src="img/trabalhista.png" className="img-fluid img-thumbnail mb-4" alt="Event demo" />
            <h2 className="h5 text-center text-dark">Direito trabalhista</h2>
          </a>
        </div>
        <div className="col-lg-6 mb-4">
          <a href="saas.html" className="stretched-link">
            <img src="img/familiar.png" className="img-fluid img-thumbnail mb-4" alt="Saas demo" />
            <h2 className="h5 text-center text-dark">Direitos da família</h2>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>

    <div className="bg-skew bg-skew-light">
    <section className="container" id="contato">
    <div className="row py-4">
      <div className="col-sm-12 col-md-12 mb-4 mb-md-12">
        <div className="pr-lg-3">

          <h1>Contato</h1>

<form>
<div className="form-group">
    <label htmlFor="nome" className="small text-uppercase">Nome</label>
    <input type="text" className="form-control" id="nome" />
  </div>
  <div className="form-group">
    <label htmlFor="email" className="small text-uppercase">E-mail</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="assunto" className="small text-uppercase">Assunto</label>
    <input type="text" className="form-control" id="assunto" />
  </div>
  <div className="form-group">
    <label htmlFor="mensagem" className="small text-uppercase">Mensagem</label>
    <textarea type="text" className="form-control" id="mensagem" />
  </div>
  <button type="submit" className="btn btn-pill btn-primary">Enviar</button>
</form>

        </div>
      </div>

    </div>
    <br />
    <br />
    <br />
  </section>
</div>

  
    {/* Accordion */}
    <section className="container" id="faq">
      <h2 className="my-5 text-center">FAQ</h2>
      <div className="row justify-content-lg-center pb-5">
        <div className="col-lg-9">
          <div className="accordion" id="accordionQuestions">
            <div className="card mb-2 shadow">
              <div className="card-header" id="headingOne">
                <h3 className="card-title">
                  <a className="collapsed" role="button" href="#collapseTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Qui Lorem duis consectetur enim nisi sunt laboris? <i className="fas fa-angle-down float-right rotate-icon" aria-hidden="true" />
                  </a>
                </h3>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionQuestions">
                <div className="card-body">
                  <p>The theme are built on versions of Bootstrap v4. As more Bootstrap updates are launched the theme will be updated as needed.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2 shadow">
              <div className="card-header" id="headingTwo">
                <h3 className="card-title">
                  <a className="collapsed" role="button" href="#collapseOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Laborum exercitation consectetur pariatur deserunt dolor fugiat sint incididunt? <i className="fas fa-angle-down float-right rotate-icon" aria-hidden="true" />
                  </a>
                </h3>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionQuestions">
                <div className="card-body">
                  <p>You can purchase the theme on Bootstrap Themes via any major credit/debit card (via Stripe) or with your Paypal account.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2 shadow">
              <div className="card-header" id="headingThree">
                <h3 className="card-title">
                  <a className="collapsed" role="button" href="#collapseThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Mollit quis mollit elit cillum ipsum duis? <i className="fas fa-angle-down float-right rotate-icon" aria-hidden="true" />
                  </a>
                </h3>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionQuestions">
                <div className="card-body">
                  <p>Support for the theme is given for 6 months after you purchase the theme and is specific to questions around functionality, bugs, and basic implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr className="sep border-primary" role="presentation" />
  
</main>

        );

    }
 
}