import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const RevenueCycleManagement = () => {
  TabTitle('RCM Review and Recommendations | HSHCRS');

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>Revenue Cycle Management is a professional name for Medical Billing Services that encompasses a cycle of additional billing services along with the process of submitting claims to the insurance payors to receive reimbursement for the services provided to patients.</p>
              <h2>Patient Registration</h2>
              <p>Before every appointment patients need to verify their insurance information and eligibility.Insurance information can be changed at any period of time, which is why it is necessary to ask the patient if their insurance information is current or it changed since the last visit.Subtle changes in the insurance information can also impact benefits or copays.</p>
              <h2>Insurance Eligibility Verification</h2>
              <p>This process involves the collection of documentation relating to a patient's insurance. Once the relevant information has been gathered, the verification process will begin. The billing system will be updated based on the kind of coverage that a patient is eligible for.</p>
              <h2>Denial Management</h2>
              <p>We work on unpaid claims to maximize the collection for practices and re-submit error-free claims along with following up on all the remaining accounts in the buckets.</p>
              <h2>Performance Management Reports</h2>
              <p>Documents and tracks the patient life-cycle from registration and appointment scheduling to the final payment of a balance and payment posting.</p>
              <p>The last stage of revenue cycle management is to include and create a detailed and comprehensive report of a healthcare organization's performance over a particular period of time which can be typically a month. This periodic analysis of a company can be modelled depending on the preferences of clients or the organization. These reports serve as great analytical tools and can also be used to promote a healthcare organization.</p>
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

export default RevenueCycleManagement