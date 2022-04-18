import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const ARCleanUp = () => {
    TabTitle('A/R Clean Up | HSHCRS')

    return (
        <>
            <div className="container pb-5 pt-4">
                <div className="row ">
                    <div className="col-md-8">
                        <div class="welcome-area inner-text">
                            <p>The number of services provided by physicians, hospitals, and nursing homes is continuously increasing. Each time patients are given care and treatment, they owe a certain amount to the physicians or hospitals.</p>
                            <p>An effective insurance model helps healthcare organizations to recover overdue payments from insurance carriers easily and on time. This is when accounts receivable (AR) Clean up services come into the picture. It helps the healthcare service providers run their practice successfully and smoothly while ensuring the owed amount is refunded back in as short a time as possible.</p>
                            <p>The receivable accounts follow-up team in a healthcare organization is responsible for looking after denied claims and reopening them to receive maximum reimbursement from the insurance companies at the right time. Revenue cycle management and medical billing A/R handled by an in-house team is a thing of the past. Nowadays, it demands billing professionals with a specialized skill-set to look after the A/R follow-ups services.</p>
                            <h2>The 3 Stages of Medical Billing A/R Follow-up:</h2>
                            <ul>
                                <li><strong className='in-heading'>STAGE 1: INITIAL EVALUATION</strong>
                                </li>
                                <li><strong className='in-heading'>STAGE 2: ANALYSIS AND PRIORITIZING</strong>
                                </li>
                                <li><strong className='in-heading'>STAGE 3: COLLECTION</strong>
                                </li>
                            </ul>
                            <h2>6 Reasons Why A/R Follow-up is Important in Medical Billing Process:</h2>
                            <ul>
                                <li><strong className='in-heading'>FINANCIAL STABILITY OF THE HOSPITAL</strong>
                                </li>
                                <li><strong className='in-heading'>HELPS IN RECOVERING OVERDUE PAYMENTS</strong>
                                </li>
                                <li><strong className='in-heading'>MINIMIZE TIME FOR OUTSTANDING ACCOUNTS</strong>
                                </li>
                                <li><strong className='in-heading'>CLAIMS NEVER GO MISSING</strong>
                                </li>
                                <li><strong className='in-heading'>CLAIMS DENIED CAN BE FOLLOWED UP</strong>
                                </li>
                                <li><strong className='in-heading'>RECOVER CLAIMS KEPT PENDING FOR INFORMATION</strong>
                                </li>
                            </ul>

                            <p>Our highly experienced Insurance follow up specialists and A/R Cleanup team have worked with various insurance companies and are well-versed with all their policies. We ensure that our customers do not face any difficulties in any time period in receiving the payments for the services they have provided. If you have any such requirements, feel free to get in touch with us by contacting directly on our contact number and we will get back to you within 24 hours.</p>
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

export default ARCleanUp