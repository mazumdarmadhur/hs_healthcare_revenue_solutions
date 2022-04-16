import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import medical from '../../assets/medical-billing.svg'
import rcm from '../../assets/rcm.svg'

const Work = () => {
    return (
        <>
            <div className="my-5 work__bg d-flex align-items-center">
                <div className="py-5">
                    <div className="text-center work__heading pb-5">Here’s what you can expect when you register with HSHRS</div>

                    {/* TWO COLUMN SECTION STARTS */}
                    <div className="container-fluid mt-2 work__content">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                {/* FIRST COLUMN STARTS */}
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2  d-flex justify-content-center flex-column">
                                        <p className='heading__col'>
                                            Medical Billing
                                        </p>
                                        <p className='my-3 text__col'>
                                            Amet minim mollit non deserunt ullamco est sit
                                            aliqua dolor do amet sint. Velit officia
                                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                        </p>
                                        <div className="d-grid gap-2 text__col">
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 header-img">
                                        <img src={medical} alt="Medical Billing" srcset="" className="img-fluid " />
                                    </div>
                                </div>
                                {/* FIRST COLUMN ENDS */}

                                {/* SECOND COLUMN STARTS */}
                                <div className="row ">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <p className='heading__col'>
                                            Revenue Cycle Management
                                        </p>
                                        <p className='my-3 text__col'>
                                            Amet minim mollit non deserunt ullamco est sit
                                            aliqua dolor do amet sint. Velit officia
                                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                        </p>
                                        <div className="d-grid gap-2 text__col">
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                            <div>
                                                <span className='check'><BsFillCheckCircleFill /> </span>
                                                Amet minim mollit non deserunt
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={rcm} alt="Medical Billing" srcset="" className="img-fluid " />
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