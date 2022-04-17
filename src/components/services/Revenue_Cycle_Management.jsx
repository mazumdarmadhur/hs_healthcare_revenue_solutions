import React from 'react'
import Service_list from './Service_list'

const Revenue_Cycle_Management = () => {
  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>FHRM offers end-to-end revenue cycle management services. Revenue Cycle Management refers to the collection of business process tasks that are related to payment for medical services. The service covers all components of the administrative process beginning with registration and culminating in the balancing of accounts. The entire process of revenue cycle management involves gathering important information about patients' medical histories, demographics, and insurance schemes. This information is then further processed electronically to determine insurance eligibility and the financial capacity of a patient. The process is an ongoing one that includes a number of separate components. FHRM revenue cycle management services include but are not limited to the following:</p>
              <h2>Patient Registration</h2>
              <p>Before patients can schedule an appointment or interaction with a doctor or a physician, they will be required to divulge important information about their demographics so as to allow the hospital to create an accurate profile for them. Registration also allows hospitals to determine whether the patient has already created a profile with the organization in the past</p>
              <h2>Insurance Eligibility Verification</h2>
              <p>This process involves the collection of documentation relating to a patient's insurance. Once the relevant information has been gathered, the verification process will begin. The billing system will be updated based on the kind of coverage that a patient is eligible for.</p>
              <h2>Electronic Claim Submission</h2>
              <p>This is a critical stage in the revenue cycle management process. Claims typically contain important information related to the patient's medical history and insurance coverage. Through a process of electronic submission, we will ensure that all claims are tracked, recorded, as well as verified accurately and in a timely manner.</p>
              <h2>Performance Management Reports</h2>
              <p>The final stage of revenue cycle management includes creating a detailed and comprehensive report of a healthcare organization's performance over the course of a particular period of time (typically a month). This periodic analysis of a company can be customized depending on the preferences of our clients. These reports not only serve as great analytical tools but can also be used to promote a healthcare organization.</p>
            </div>
          </div>
          <div className="col-md-4">
            <Service_list />
          </div>
        </div>
      </div>

    </>
  )
}

export default Revenue_Cycle_Management