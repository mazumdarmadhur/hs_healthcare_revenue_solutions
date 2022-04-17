import React from 'react'
import './Services.scss'
import { NavLink } from 'react-router-dom'



const data = [
    {
        id: 1,
        link: '/Revenue_Cycle_Management',
        title: 'End to End Revenue Cycle Management',
    },
    {
        id: 2,
        link: '/Payment_Posting',
        title: 'Payment_Posting',
    },
    {
        id: 3,
        link: '/',
        title: 'End to End ',
    },
]


const Service_list = () => {
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

export default Service_list