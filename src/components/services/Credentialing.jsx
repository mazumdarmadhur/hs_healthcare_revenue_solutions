import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const Credentialing = () => {
  TabTitle('Credentialing and Contracting | HSHCRS')

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>Provides Credentialing services that act as a one-point contact for all your credentialing and applications woes.</p>
              <p>Provider credentialing and enrollment can turn into one of the most time-consuming components of the medical billing process unless you have the right management functions in place. It is straightaway related to the eligibility of a healthcare provider in receiving reimbursement sums from insurance agencies and carriers.</p>
              <p>Insurance agencies require detailed documentation and credentials related to the doctors and physicians that healthcare providers employ. Collating and compiling this information cannot be done on a last-minute basis if mistakes, redundancies, and delays are to be avoided.</p>
              <h2>What Services include in Credentialing:</h2>
              <ul>
                <li><strong className='in-heading'>Enrollment Services</strong>
                </li>
                <li><strong className='in-heading'>Provider Revalidation</strong>
                </li>
                <li><strong className='in-heading'>NPI Registration</strong>
                </li>
                <li><strong className='in-heading'>Medicare Enrollment</strong>
                </li>
                <li><strong className='in-heading'>CAQH Enrollment</strong>
                </li>
                <li><strong className='in-heading'>Demographic upgrade</strong>
                </li>
              </ul>
              <h2>From small to large, we provide services all/any healthcare companies, including:</h2>
              <ul>
                <li><strong className='in-heading'>Solo Practices</strong>
                </li>
                <li><strong className='in-heading'>Physicians</strong>
                </li>
                <li><strong className='in-heading'>Psychology Counselors</strong>
                </li>
                <li><strong className='in-heading'>Physical, Occupational, Speech Therapists</strong>
                </li>
                <li><strong className='in-heading'>Group Medical Practices</strong>
                </li>
                <li><strong className='in-heading'>Large Medical Centers</strong>
                </li>
                <li><strong className='in-heading'> Healthcare Facilities</strong>
                </li>
                <li><strong className='in-heading'>DME Companies </strong>
                </li>
                <li><strong className='in-heading'>Home Health Agencies</strong>
                </li>
              </ul>

              <h2>A SImple 4-Steps Credentialing Process</h2>
              <ul>
                <li><strong className='in-heading'>Onboarding:</strong><p className='in__heading__p'>We make recommendations and help you select the insurance companies you want to be networked with.
                  You complete our master survey and send in the applicable documentation.</p></li>
                <li><strong className='in-heading'>Application:</strong><p className='in__heading__p'>We obtain all up-to-date insurance applications and complete them on your behalf within five business days of receiving all necessary documentation from you.</p></li>
                <li><strong className='in-heading'>Follow Up:</strong><p className='in__heading__p'>We follow up and maintain to make sure all applications have been received. We proactively follow up to ensure the enrollment process moves forward effectively and sufficiently and without delays.</p></li>
                <li><strong className='in-heading'>Completion:</strong><p className='in__heading__p'>We will inform and notify you about all insurance approvals as soon as we receive confirmation. We will gather and send you all the applicable information from the insurance panel. </p></li>
              </ul>
              <p>The process of enrollment and credentialing is a complicated and long one that involves careful preparation and submission of a number of key documents relating to the physicians that a healthcare provider employs. Choose us to improve your business's operational effectiveness.</p>
            </div>
          </div>
          <div className="col-md-4">
            <ServiceList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Credentialing