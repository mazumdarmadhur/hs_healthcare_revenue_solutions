import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Footer, Homepage, Nav, RevenueCycleManagement, PaymentPosting } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/footer' element={<Footer />} />
        <Route exact path='/RevenueCycleManagement' element={<RevenueCycleManagement />} />
        <Route exact path='/PaymentPosting' element={<PaymentPosting />} />
        <Route exact path='*' element={<Navigate replace to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;