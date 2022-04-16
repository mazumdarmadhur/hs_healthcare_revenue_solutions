import React from 'react';
import { About, Contact, Footer, Homepage, Nav, Services } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <Homepage />
      <Nav />
      <About />
      <Contact />
      <Services />
      <Footer />
    </>
  );
};

export default App;
