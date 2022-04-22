import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { ImArrowRight2 } from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className="pt-5 work__bg">
        <div className="container">
          <div className="row pb-4 text-center text-md-start">

            <div className="col-md-3 col-lg-3 col-xl-3 col-10 mx-auto main__col">
              <h5 className="font-weight-bold mt-3 mb-4">About</h5>
              <p className='about_para'>
                We are a high yield and technology-empowered Healthcare RCM outsourcing company that provides medical billing and medical coding services.
                <NavLink to='/about' className='arrow__about'> <ImArrowRight2 /></NavLink>
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 className="font-weight-bold mt-3 mb-4">Quick Links</h5>

              <ul className="list-unstyled ">
                <li>
                  <NavLink to="/" className="footer__list">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="footer__list">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="footer__list">Contact</NavLink>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 className="font-weight-bold mt-3 mb-4">Services</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="/Credentialing" className="footer__list">Credentialing</NavLink>
                </li>
                <li>
                  <NavLink to="/RevenueCycleManagement" className="footer__list">RCM</NavLink>
                </li>
                <li>
                  <NavLink to="/ClearingHouseEnrollment" className="footer__list">Clearing House Enrollment</NavLink>
                </li>
                <li>
                  <NavLink to="/EftEra" className="footer__list">EFT/ERA Setup</NavLink>
                </li>
                <li>
                  <NavLink to="/ClaimScrubbingSubmission" className="footer__list">Claim Submission</NavLink>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 className="font-weight-bold mt-3 mb-4">Services</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="/ClaimRejection" className="footer__list">Claim Rejection</NavLink>
                </li>
                <li>
                  <NavLink to="/Audit" className="footer__list">Audit</NavLink>
                </li>
                <li>
                  <NavLink to="/PaymentPosting" className="footer__list">Payment posting</NavLink>
                </li>
                <li>
                  <NavLink to="/PatientStatement" className="footer__list">Patient statements</NavLink>
                </li>
                <li>
                  <NavLink to="/ARCleanUp" className="footer__list">A/R CleanUp</NavLink>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="footer__copyright text-center py-3">© 2022 Copyright:
          <NavLink to="/" className="copyright__link"> hshcrs.com</NavLink>
        </div>
      </div>

    </>
  )
}

export default Footer