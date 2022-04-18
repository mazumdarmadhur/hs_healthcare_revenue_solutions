import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const Audit = () => {
  TabTitle('Audit/Code Review | HSHCRS')

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>The Audit Department ensures quality by reducing Rejections and error percentage and increase the practice’ reimbursement</p>
              <h2>Medical Coding Audit</h2>
              <p>
                The content management system recommends that practices regularly audit coding practices.
                There are different auditing techniques that can be applied, but the basic idea is to make certain that the coding process is accurate and meets regulatory requirements.
                Coding audits can be managed by using a sample of your submitted claims. They can be conducted randomly, or you can target certain types of claims.
                It is recommended that you should schedule coding audits on a regular basis to maintain acquiescence.
              </p>
              <h2>What Are Medical Coding Service?</h2>
              <p>Coders of medical firstly access each patient’s medical reports and then determine which diagnostic procedure the healthcare provider has performed on the basis of the patient's health. Then they code these procedures ad diagnoses based on a national classification system. Coders then assign a specific/unique alphanumeric code to each procedure and diagnosis. Medical coding services follow these steps when processing claims:</p>
              <ul>
                <li>A medical coding expert will collect the patient's information then convert it into code and enter the data into the system. The patient information may be in the form of an electronic file or handwritten.</li>
                <li>Once the data has been entered into the system by the coder, then it is passed on to the appropriate team. Then they add further data such as the doctor’s name, location and timing.</li>
                <li>Certified coders then translate the diagnostic information and procedural into code. They also make sure that the codes are compatible to avoid rejection in the auditing.</li>
                <li>Then the final files are sent back to the client for feedback. This helps to refine the service.</li>
              </ul>
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

export default Audit