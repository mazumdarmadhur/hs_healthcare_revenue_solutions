import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className="pt-5 work__bg">
        <div className="container">
          <div className="row pb-4 text-center text-md-start">

            <div className="col-md-3 col-lg-3 col-xl-3 col-10 mx-auto main__col">
              <h5 className="font-weight-bold mt-3 mb-4">About</h5>
              <p className='about_para'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
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

            <hr class="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 class="font-weight-bold mt-3 mb-4">Services</h5>

              <ul class="list-unstyled">
                <li>
                  <NavLink to="/RevenueCycleManagement" className="footer__list">RCM</NavLink>
                </li>
                <li>
                <NavLink to="/ClaimScrubbingSubmission" className="footer__list">Claim Submission</NavLink>
                </li>
                <li>
                <NavLink to="/PaymentPosting" className="footer__list">Payment posting</NavLink>
                </li>
                <li>
                <NavLink to="/EftEra" className="footer__list">EFT/ERA</NavLink>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 class="font-weight-bold mt-3 mb-4">Services</h5>

              <ul class="list-unstyled">
                <li>
                <NavLink to="/Credentialing" className="footer__list">Credentialing</NavLink>
                </li>
                <li>
                <NavLink to="/Audit" className="footer__list">Audit</NavLink>
                </li>
                <li>
                <NavLink to="/ManagementOversite" className="footer__list">management oversite</NavLink>
                </li>
                <li>
                <NavLink to="/PatientStatement" className="footer__list">Patient statements</NavLink>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="footer__copyright text-center py-3">© 2020 Copyright:
          <NavLink to="/" className="copyright__link">hshcrs.com</NavLink>
        </div>
      </div>

    </>
  )
}

export default Footer