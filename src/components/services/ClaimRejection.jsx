import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const ClaimRejection = () => {
  TabTitle('Claim Rejection | HSHCRS');

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>A rejected claim has been rejected because of the errors. An insurance company might reject the claim because the medical billing specialist may incorrectly input patients or insurance information. Once a medical billing specialist settles the errors on a rejected claim they can then resubmit the claim for processing with an insurance company.</p>
              <h2>Accurate Resolution For Claim Rejection</h2>
              <p>We are professionals who pay great attention to detail, we ensure that the rejection resolution provided is highly accurate and error-free and the claim rejection has fewer options to get rejected, we will ensure that the rejection resolution provided is highly accurate and error-free.</p>
              <p>FHRM's staff is trained in a way that they add value to the process of medical billing. They go beyond data entry and analyze inaccuracies in patient documentation before updating profiles. Our professionals are trained to work quickly and accurately, allowing them to produce results in a timely manner. FHRM also benefits from the use of the latest medical billing software available in the market.</p>
              <h2>Quick Turnaround Time</h2>
              <p>We will make sure that we will deliver all the services within a quick turnaround time to prevent any delay in rejection resolution.</p>
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

export default ClaimRejection