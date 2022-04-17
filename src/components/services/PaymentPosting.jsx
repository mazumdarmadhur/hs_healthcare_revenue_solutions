import React from 'react'
import ServiceList from './ServiceList'

const PaymentPosting = () => {
    return (
        <>
            <div className="container pb-5 pt-4">
                <div className="row ">
                    <div className="col-md-8">
                        <div class="welcome-area inner-text">
                            <p>After the medical coding process, the various patient profiles that have been created through patient registration can now be updated. Medical codes help trained professionals determine the kind of charges that each patient is required to reimburse a healthcare enterprise of physician with. Therefore, it is imperative that the information posted on patient profiles is extremely accurate.</p>
                            <p>FHRM is firmly committed to providing charge entry and payment posting services that are premised on accuracy and transparency. Our specialist charge entry personnel have extensive experience with medical coding and data entry. We understand that in order to expedite the business process in a healthcare organization, the charge entry and payment posting process must be swift. FHRM's charge entry and payment posting services will ensure satisfaction on the part of the physician and the patient.</p>
                            <h2>The Process</h2>
                            <ul>
                                <li>The first step of the process includes updating the client's billing system with the relevant patient information. A patient's demographics and charges are entered into the system based on the rules and guidelines preset by the client.</li>
                                <li>The second step involves verifying whether all documents have been submitted electronically. If there are pending documents, the client will be informed immediately.</li>
                                <li>Once the charges have been entered into the respective patient profiles, the audit team at FHRM will check for accuracy, before any claims are filed.</li>
                            </ul>
                            <p>FHRM's staff is trained in a way that they add value to the process of medical billing. They go beyond data entry and analyze inaccuracies in patient documentation before updating profiles. Our professionals are trained to work quickly and accurately, allowing them to produce results in a timely manner. FHRM also benefits from the use of the latest medical billing software available in the market.</p>
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