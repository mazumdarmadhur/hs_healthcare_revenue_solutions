import React from 'react'
import './Services.scss'
import { NavLink } from 'react-router-dom'



const data = [
    {
        id: 1,
        link: '/Credentialing',
        title: 'Credentialing and Contracting',
    },
    {
        id: 2,
        link: '/RevenueCycleManagement',
        title: 'RCM Review and Recommendations',
    },
    {
        id: 3,
        link: '/',
        title: 'Clearing House Enrollment',
    },
    {
        id: 4,
        link: '/EftEra',
        title: 'EFT/ERA Setup ',
    },
    {
        id: 5,
        link: '/ClaimScrubbingSubmission',
        title: 'Claim Scrubbing/Submission',
    },
    {
        id: 6,
        link: '/ClaimRejection',
        title: 'Claim Rejection',
    },
    {
        id: 7,
        link: '/Audit',
        title: 'Audit/Code Review',
    },
    {
        id: 8,
        link: '/PaymentPosting',
        title: 'Payment Posting',
    },
    {
        id: 9,
        link: '/PatientStatement',
        title: 'Patient Statements',
    },
    {
        id: 10,
        link: '/ARCleanUp',
        title: 'A/R Clean Up',
    },
]


const ServiceList = () => {
    return (
        <>
            <div class="service-list">
                <ul>
                    {
                        data.map(({ id, link,title }) => {
                            return (
                                <li><NavLink to={link}>{title}</NavLink></li>
                            )
                        })
                    }

                    {/* <li><a href="charge-entry-payment-posting.html">Charge Entry &amp; Payment Posting</a></li>
                    <li><a href="accounts-receivables.html">Accounts Receivables</a></li>
                    <li><a href="medical-coding.html">Medical Coding</a></li>
                    <li><a href="provider-enrollment-credentialing.html">Provider Enrollment &amp; Credentialing</a></li>
                    <li><a href="eligibility-verification-prior-authorization.html">Eligibility Verification and Prior Authorization </a></li>
                    <li><a href="appointment-scheduling.html">Appointment Scheduling</a></li> */}
                </ul>
            </div>
        </>
    )
}

export default ServiceList