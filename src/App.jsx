import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Contact, Footer, Homepage, Nav, RevenueCycleManagement, PaymentPosting, ClaimScrubbingSubmission, ClaimRejection, EftEra, Credentialing, Audit, ManagementOversite, PatientStatement, ARCleanUp, ScrollToTop } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Nav />
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/footer' element={<Footer />} />
        <Route exact path='/RevenueCycleManagement' element={<RevenueCycleManagement />} />
        <Route exact path='/PaymentPosting' element={<PaymentPosting />} />
        <Route exact path='/ClaimScrubbingSubmission' element={<ClaimScrubbingSubmission />} />
        <Route exact path='/ClaimRejection' element={<ClaimRejection />} />
        <Route exact path='/EftEra' element={<EftEra />} />
        <Route exact path='/Credentialing' element={<Credentialing />} />
        <Route exact path='/Audit' element={<Audit />} />
        <Route exact path='/ManagementOversite' element={<ManagementOversite />} />
        <Route exact path='/PatientStatement' element={<PatientStatement />} />
        <Route exact path='/ARCleanUp' element={<ARCleanUp />} />
        <Route exact path='*' element={<Navigate replace to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;