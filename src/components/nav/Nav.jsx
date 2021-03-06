/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
// import Logo3 from '../../assets/logo3.svg';
import Logo from '../../assets/lo.svg';
import "./Nav.scss";

const Nav = () => {

  return (
    <>
      <div className="header nav__bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a
                    className="navbar-brand"
                    href="/"
                  >
                    {/* <img src={Logo3} alt="" width="50" height="30" className="img-fluid d-inline-block align-text-top" /> */}
                    <img src={Logo} alt="" width="170" height="30" className="img-fluid d-inline-block align-text-top" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/about"
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Services
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><NavLink className="dropdown-item service__dropdown" to="/Credentialing">Credentialing</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/RevenueCycleManagement">Revenue Cycle Management</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/ClearingHouseEnrollment">Clearing House Enrollment</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/EftEra">EFT/ERA Setup</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/ClaimScrubbingSubmission">Claim Scrubbing Submission</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/ClaimRejection">Claim Rejection</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/Audit">Audit/Code Review</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/PaymentPosting">Payment Posting</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/PatientStatement">Patient Statements</NavLink>
                          </li>
                          <li><NavLink className="dropdown-item service__dropdown" to="/ARCleanUp">A/R Clean Up</NavLink>
                          </li>
                        </ul>

                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
