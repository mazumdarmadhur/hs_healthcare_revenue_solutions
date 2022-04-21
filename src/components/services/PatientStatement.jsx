import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const PatientStatement = () => {
  TabTitle('Patient Statement | HSHCRS')

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>Due to high insurance premiums, nowadays employers are providing health insurance policies with higher deductibles, more co-insurance, and larger co-pays to their employees which many services are just plain not covered. This leaves more patients with the balances in their accounts that need to be paid to your practice. We include billing patients for these balances.</p>
              {/* <p>We generate easy to understand patient statements weekly. This creates and benefits a continuous flow of revenue. Patients can send direct payment to your practice. We do not interfere with your money. We provide our direct contact number which appears on the statement so that patients will call us directly with all of their billing questions and concerns. No more time-consuming phone calls for your practices. We provide patients with the best possible customer service to answer their all questions, we interpret their EOBs and work with their insurance companies to get their claims resolved as soon as possible.</p>
              <p>We are not a collection agency but we make every effort to collect your money. We try to help patients pay their bills on time. We will send out patient statements, a demand letter and follow up with phone calls. Based on the criteria, we will work with patients to set up payment plans if it is needed and monitor these payments. Although, If the patient balance remains outstanding after these efforts, we then recommend that the account be turned over to a collection agency or an attorney for collections upon your approval.</p> */}
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

export default PatientStatement