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
                  <a href="#!" className="footer__list">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 4</a>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div className="col-md-3 col-sm-6 col-10 mx-auto ps-md-5 main__col">
              <h5 class="font-weight-bold mt-3 mb-4">Services</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" className="footer__list">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="footer__list">Link 4</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="footer__copyright text-center py-3">© 2020 Copyright:
          <NavLink to="/" className="copyright__link"> hshcrs.com</NavLink>
        </div>
      </div>

    </>
  )
}

export default Footer