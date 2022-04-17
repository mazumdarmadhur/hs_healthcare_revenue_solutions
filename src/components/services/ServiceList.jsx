import React from 'react'
import './Services.scss'
import { NavLink } from 'react-router-dom'



const data = [
    {
        id: 1,
        link: '/RevenueCycleManagement',
        title: 'End to End Revenue Cycle Management',
    },
    {
        id: 2,
        link: '/PaymentPosting',
        title: 'PaymentPosting',
    },
    {
        id: 3,
        link: '/ClaimScrubbingSubmission',
        title: 'Claim Scrubbing/Submission ',
    },
    {
        id: 4,
        link: '/ClaimRejection',
        title: 'Claim Rejection',
    },
    {
        id: 5,
        link: '/EftEra',
        title: 'EFT/ERA  ',
    },
    {
        id: 6,
        link: '/Credentialing',
        title: 'Credentialing and Contracting',
    },
    {
        id: 7,
        link: '/Audit',
        title: 'Audit/Code Review',
    },
    {
        id: 8,
        link: '/ManagementOversite',
        title: 'Management Oversite',
    },
    {
        id: 9,
        link: '/PatientStatement',
        title: 'Patient Statements',
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