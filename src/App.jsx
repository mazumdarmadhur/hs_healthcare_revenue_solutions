import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Footer, Homepage, Nav, Services } from './components';
import Revenue_Cycle_Management from './components/services/Revenue_Cycle_Management';
import Payment_Posting from './components/services/Payment_Posting';
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
        <Route exact path='/Revenue_Cycle_Management' element={<Revenue_Cycle_Management />} />
        <Route exact path='/Payment_Posting' element={<Payment_Posting />} />
        <Route exact path='*' element={<Navigate replace to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;