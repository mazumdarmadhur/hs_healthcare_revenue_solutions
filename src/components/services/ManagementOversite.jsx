import React from 'react'
import ServiceList from './ServiceList'

const ManagementOversite = () => {
  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>RCM performance improves when all the billing functions follows common guiding principles. Providers must be constantly modifying the processes to ensure continuous improvement and respond to ever-changing government regulations. Although there are no set formula for making improvements, many providers are amending processes in similar ways:</p>
              <ul>
                <li><strong className='in-heading'>Enhancing the patient’s experience</strong></li>
                <li><strong className='in-heading'>Optimizing RCM processes</strong></li>
                <li><strong className='in-heading'>Implementing time-of-service collections</strong></li>
              </ul>
              <p>Although providers are pursuing a variety of strategies to attain revenue cycle excellence, high-performing RCM practices don’t just happen. Practices that use value-driven and patient-focused revenue cycle processes have done so by leveraging integrated technology and dynamic RCM teams and committing to their policies, procedures, and protocols (PPP).</p>
              <p>We just look beyond tracking a claim, your revenue cycle comprehends all the many steps from when a patient first makes an appointment to the time when there is no longer a balance on that person’s account. It includes front-end office tasks like insurance eligibility verification and appointment scheduling. Tasks related to clinical care like charge capture and coding, back-office tasks such as claims submission, payment posting, statement processing, and management of denied claims. The extent to which your practices have to be handled on these steps directly impacts your ability to get paid the full amount you are owed as quickly as possible.</p>
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

export default ManagementOversite