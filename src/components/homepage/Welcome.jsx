import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center welcome__heading">Welcome to HSHRS</div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-10 mx-auto">
                            <div className="welcome__text text-center">
                                <p>
                                    HSHCRS provides specialized Revenue Cycle Management, Medical Billing, Medical Coding, Eligibility Verification and Prior Authorization, Provider Enrollment and Credentialing and Appointment Scheduling services to healthcare organizations all over the United States. Our host of services is designed to specifically improve business processes for companies operating within the healthcare industry. We understand the importance of smooth processing and flow of information within the healthcare industry and we are fully committed to providing all our clients with accurate and timely healthcare business process services.
                                    <div>
                                        <NavLink to='/about' className="know__more">KNOW MORE</NavLink>
                                    </div>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Welcome