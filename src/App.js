import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import estilo from './styles.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
