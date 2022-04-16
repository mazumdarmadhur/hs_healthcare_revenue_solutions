import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Footer, Homepage, Nav, Services } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/footer' element={<Footer />} />
        <Route exact path='/nav' element={<Footer />} />
        <Route exact path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </>
  );
};

export default App;