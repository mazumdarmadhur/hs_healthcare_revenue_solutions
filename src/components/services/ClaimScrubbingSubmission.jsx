import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const ClaimScrubbingSubmission = () => {
  TabTitle('Claim Scrubbing/Submission | HSHCRS')

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>Medical insurance claim submission is one of the major key steps in the medical billing process. It determines the total amount of reimbursement that will be receive to the healthcare provider after the insurance company clears the dues.Claim submissions/scrubbing have to be correct in order to avoid reimbursement delays in the medical billing process. We can work with any EMR and have the expertise and experience to execute all aspects of RCM and be compatible with your current EMR.</p>
              <h2>Collecting Receipts</h2>
              <p>The first step is to gather the itemized bill from the healthcare provider listing all services provided by them to the patient along with the cost and relevant code of the treatment provided. We will assist you in collecting all the required documents and receipts.</p>
              <h2>Filling Claim Form</h2>
              <p>The claim form mentions the details that are related to the patient's illness and the services which were provided to them. It also determines if all or which expenses were claimed under the client's insurance plan or not. We can help you to fill the claim form with the following details. </p>
              <ul>
                <li>Personal information (Name, Address, and DOB)</li>
                <li>Insurance policy number</li>
                <li>Background information and reason for visit</li>
                <li>Healthcare provider's name and address</li>
                <li>Any expenses details which the patient has already paid</li>
              </ul>
              <p>After all the claim details are entered into the medical billing software, we will then make a copy of all the forms and documents as a backup in the system. We will then thoroughly review all the details and then make any kind of corrections that is necessary to make the details appropriate. When all the details are correct and completed and the required documents are attached, then we submit the claim form to the insurance company.</p>
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

export default ClaimScrubbingSubmission