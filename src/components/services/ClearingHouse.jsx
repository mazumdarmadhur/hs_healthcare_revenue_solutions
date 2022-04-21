import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const ClearingHouse = () => {
    TabTitle('Clearing House Enrollment | HSHCRS')

    return (
        <>
            <div className="container pb-5 pt-4">
                <div className="row ">
                    <div className="col-md-8">
                        <div class="welcome-area inner-text">
                            <h2>EDI: Electronic Data Interchange</h2>
                            <p>The health care industry is a tangled web of many medical administrative services like insurance reimbursement, medical billing, claims submission, compliance management, patient enrollment etc. These administrative services are complicated due to the various steps involved in data collection, verification and record management. To make the medical administrative services effective, hassle-free and efficient HIPAA (Health Insurance Portability and Accountability Act of 1996) has manifested to be quite successful with its national standards for electronic transactions in the health care industry.</p>
                            <p>Electronic Data Interchange (EDI) in healthcare is a secure way of transmitting data between healthcare institutions, patients, and insurers using established message formats and standards. The standard formats available fall in HIPAA EDI for claim transactions interchange are as follows:</p>
                            <ul>
                                <li><strong className='in-heading'>Healthcare claim transaction set (837)</strong></li>
                                <li><strong className='in-heading'>Retail pharmacy claim transaction</strong></li>
                                <li><strong className='in-heading'>Healthcare claim payment/advice transaction set (835)</strong></li>
                                <li><strong className='in-heading'>Benefits enrollment and maintenance set (834)</strong></li>
                                <li><strong className='in-heading'>Healthcare eligibility/benefit inquiry (270)</strong></li>
                                <li><strong className='in-heading'>Healthcare eligibility/benefit response (271)</strong></li>
                                <li><strong className='in-heading'>Healthcare claim status request (276)</strong></li>
                                <li><strong className='in-heading'>Healthcare claim status notification (277)</strong></li>
                                <li><strong className='in-heading'>Healthcare service review Information (278)</strong></li>
                            </ul>
                            <h2>EHR: Electronic Health Record</h2>
                            <p>An Electronic Health Record (EHR) is the systematized collection of a patient's electronically-stored health information or paper chart in digital version. EHRs are real-time, patient-centred records that make information available securely and instantly to authorized users. Looking for the most suitable EHR system to incorporate and integrate within a healthcare practice can be a detailed process. Often, electronic medical records software can be time-consuming because of the lengthy workflow. The solution lies in looking for the most suitable EHR solution for you, which empowers healthcare practitioners to deliver services proficiently.</p>
                            <h2>Boost Productivity with EHR:</h2>
                            <ul>
                                <li><strong className='in-heading'>Your choice of cloud-based and local server-based</strong></li>
                                <li><strong className='in-heading'>Real-Time Prescription Benefit feature</strong></li>
                                <li><strong className='in-heading'> Increase Patient Participation</strong></li>
                                <li><strong className='in-heading'>Time-proven implementation methods for a successful EHR transition</strong></li>
                                <li><strong className='in-heading'>Practice Efficiencies and Cost Savings</strong></li>
                            </ul>
                            <p>A healthcare clearinghouse is essentially the middleman between patient, insurer and hospital to manage healthcare payments from end to end. A clearinghouse checks the medical claims for errors, gathers and processes documentation for each patient and passes them on to the insurance provider. Once clean claims are established, then any associated medical records and the claims are sent electronically to all appropriate medical organizations.</p>
                            <p>Clearing Houses simplifies this process extensively, allowing healthcare providers and organizations to coordinate with a single agency rather than with multiple insurance service providers.For reference, at HSHCRS, our clearing house quality control falls into three different categories:</p>
                            <ul>
                                <li><strong className='in-heading'>Data Integrity Edits</strong>
                                </li>
                                <li><strong className='in-heading'>EDI Compliance Edits</strong>
                                </li>
                                <li><strong className='in-heading'>Transformation Edits</strong>
                                </li>
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

export default ClearingHouse