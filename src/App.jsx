import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Footer, Homepage, Nav, RevenueCycleManagement, PaymentPosting, ClaimScrubbingSubmission, ClaimRejection, EftEra, Credentialing, Audit, ClearingHouse, PatientStatement, ARCleanUp, ScrollToTop } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/RevenueCycleManagement' element={<RevenueCycleManagement />} />
        <Route path='/PaymentPosting' element={<PaymentPosting />} />
        <Route path='/ClaimScrubbingSubmission' element={<ClaimScrubbingSubmission />} />
        <Route path='/ClaimRejection' element={<ClaimRejection />} />
        <Route path='/EftEra' element={<EftEra />} />
        <Route path='/Credentialing' element={<Credentialing />} />
        <Route path='/Audit' element={<Audit />} />
        <Route path='/ClearingHouseEnrollment' element={<ClearingHouse />} />
        <Route path='/PatientStatement' element={<PatientStatement />} />
        <Route path='/ARCleanUp' element={<ARCleanUp />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;