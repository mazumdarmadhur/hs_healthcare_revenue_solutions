import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Work = () => {
    return (
        <>
            <div className="my-5 work__bg">
                <div className="py-5">
                    <div className="text-center work__heading">Here’s what you can expect when you register with HSHRS</div>

                    <div className="container-fluid mt-2 work__content">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                        <h1>
                                            Medical Billing
                                        </h1>
                                        <p className='my-3'>
                                            Amet minim mollit non deserunt ullamco est sit
                                            aliqua dolor do amet sint. Velit officia
                                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                        </p>
                                        <div className="d-grid gap-2">
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
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src="" alt="" srcset="" className="img-fluid "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work