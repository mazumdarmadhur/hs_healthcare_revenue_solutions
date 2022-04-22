import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import medical from '../../assets/medical-billing.svg'
import rcm from '../../assets/rcm.svg'

const Work = () => {
    return (
        <>
            <div className="my-5 work__bg ">
                <div className="py-5">
                    <div className="text-center work__heading pb-5">Here’s what you can expect when you register with HSHRS</div>

                    {/* TWO COLUMN SECTION STARTS */}


                    <div className="row mx-auto">
                        <div className="col-md-12 mx-auto">
                            <div className="container mx-auto">

                                {/* FIRST COLUMN STARTS */}
                                <div className="row">
                                    <div className="col-lg-6 pt-5 pt-lg-0 order-2  d-flex justify-content-center flex-column">
                                        {/* <p className='heading__col'>
                                            Medical Billing
                                        </p> */}
                                        <p className='heading__col'>
                                            Credentialing
                                        </p>
                                        <p className='my-3 text__col'>
                                            {/* Medical billing is the process of submitting the claims and following up on claims with health insurance companies in order to receive payment for services rendered by a healthcare provider or medical billing companies interaction between a health care provider and the insurance company payor. */}
                                            Provider credentialing and enrollment can turn into one of the most time-consuming components of the medical billing process unless you have the right management functions in place. It is straightaway related to the eligibility of a healthcare provider in receiving reimbursement sums from insurance agencies and carriers.
                                        </p>
                                        <div className="d-grid gap-2 text__col">
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Prevent Healthcare Organizations & Hospitals from Losing Revenues.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Improves Practitioner’s Business.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Improves Patient Trust on Chosen Healthcare Provider.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 header-img">
                                        <img src={medical} alt="Medical Billing" srcSet="" className="img-fluid " />
                                    </div>
                                </div>
                                {/* FIRST COLUMN ENDS */}

                                {/* SECOND COLUMN STARTS */}
                                <div className="row ">
                                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <p className='heading__col'>
                                            Revenue Cycle Management
                                        </p>
                                        <p className='my-3 text__col'>
                                            Revenue Cycle Management (RCM) is the administration of financial transactions that result from the medical encounters between a provider and a patient, facility, and/or supplier. These transactions include- without limitation, billing, payer contracting, collections, provider enrollment, coding, data analytics, management, and compliance.
                                        </p>
                                        <div className="d-grid gap-2 text__col">
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Examining the necessity of medical services.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Verifies the patient’s insurance strictly end to end.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Eligibility and policy benefits are thoroughly focused.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Properly coding diagnoses and procedures.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Submitting claims of billable fees to insurance companies.
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Secured and encrypted transmission process.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={rcm} alt="Medical Billing" srcSet="" className="img-fluid " />
                                    </div>
                                </div>
                                {/* SECOND COLUMN ENDS */}
                            </div>
                        </div>
                    </div>
                    {/* TWO COLUMN SECTION ENDS */}
                </div>
            </div>
        </>
    )
}

export default Work