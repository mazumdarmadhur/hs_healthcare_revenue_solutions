import React from 'react'
import ServiceList from './ServiceList'

const PaymentPosting = () => {
    return (
        <>
            <div className="container pb-5 pt-4">
                <div className="row ">
                    <div className="col-md-8">
                        <div class="welcome-area inner-text">
                            <p>Payment posting refers to the viewing of the financial picture and payments of medical practices. It also refers to the adding or inserting of payments into the medical billing software. It provides an insight into insurance payments in EOBs, payments from patients, and checks insurance from ERAs.</p>
                            <p>A well-done payment-posting process can help to identify opportunities to increase revenue by insight into daily trends within the practice. Payment posting has a high potential to increase the profits and smooth out the overall medical billing process, it is important to get a refined process in place.</p>
                            <h2>The Process</h2>
                            <ul>
                                <li><strong className='in-heading'>EOB and ERA posting and reconcilement:</strong>
                                <p className='in__heading__p'>Ensure the data from both EOBs and ERAs match payments.</p>
                                </li>
                                <li><strong className='in-heading'>Handling denials:</strong>
                                <p className='in__heading__p'>Report and reroute denied claims to the appropriate denial management team and code for rework and re-submission to payers in a timely manner.</p>
                                </li>
                                <li><strong className='in-heading'>Patient responsibility:</strong>
                                <p className='in__heading__p'>Moving balances and identifying the patient's responsibility helps to ensure faster patient billing.</p>
                                </li>
                                <li><strong className='in-heading'>Write-offs and adjustments:</strong>
                                <p className='in__heading__p'>Process write-offs and adjustments of the report any unusual contractual adjustments while processing payment.</p>
                                </li>
                                <li><strong className='in-heading'>In-person collection issues:</strong>
                                <p className='in__heading__p'>Provide inputs on trends in denials, prior authorizations, non-covered services and deductibles or co-payment collection problems face at the point of service.</p>
                                </li>
                            </ul>
                            <p>We are trained in such a way that we add value to the process of medical billing. We go beyond the data entry and analyze the inaccuracies in patient documentation before updating and completing the profiles. We make sure that we could work quickly and accurately, allowing us to produce the results in a timely manner. We also take the benefits from the use of the latest medical billing software available in the market.</p>
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

export default PaymentPosting