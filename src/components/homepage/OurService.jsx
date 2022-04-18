import React from 'react'
import Claim from '../../assets/claim.svg'
import Payment_posting from '../../assets/payment-posting.svg'
import Audit from '../../assets/audit.svg'
import Credentialing from '../../assets/credentialing.svg'
import Eft from '../../assets/eft.svg'
import Management_oversite from '../../assets/management-oversite.svg'
import Patient_statement from '../../assets/patient-statement.svg'
import Rcm_service from '../../assets/rcm-service.svg'
import { NavLink } from "react-router-dom";

const data = [
    {
        id: 1,
        image: Claim,
        card_title: 'Claim Submission',
        link:'/ClaimScrubbingSubmission',
        card_text: 'Medical insurance claim submission is one of the major key steps in the medical billing process.'
    },
    {
        id: 2,
        image: Payment_posting,
        card_title: 'Payment posting',
        link:'/PaymentPosting',
        card_text: 'Payment posting refers to the viewing of the financial picture and payments of medical practices'
    },
    {
        id: 3,
        image: Rcm_service,
        card_title: 'RCM',
        link:'/RevenueCycleManagement',
        card_text: 'evenue Cycle Management is a professional name for Medical Billing Services that encompasses a cycle of additional billing'
    },
    {
        id: 4,
        image: Eft,
        card_title: 'EFT/ERA',
        link:'/EftEra',
        card_text: 'EFT and ERA have numerous advantages in medical billing, mostly related to your cash flow, time and medical record accuracy.'
    },
    {
        id: 5,
        image: Credentialing,
        card_title: 'Credentialing',
        link:'/Credentialing',
        card_text: 'Provides Credentialing services that act as a one-point contact for all your credentialing and applications woes.'
    },
    {
        id: 6,
        image: Audit,
        card_title: 'Audit',
        link:'/Audit',
        card_text: 'The Audit Department ensures quality by reducing Rejections and error percentage and increase the practice reimbursement'
    },
    {
        id: 7,
        image: Management_oversite,
        card_title: 'management oversite',
        link:'/ManagementOversite',
        card_text: 'RCM performance improves when all the billing functions follows common guiding principles.'
    },
    {
        id: 8,
        image: Patient_statement,
        card_title: 'Patient statements',
        link:'/PatientStatement',
        card_text: 'Due to high insurance premiums, nowadays employers are providing health insurance policies with higher deductibles'
    },
    {
        id: 9,
        image: Patient_statement,
        card_title: 'A/R Clean Up ',
        link:'/ARCleanUp',
        card_text: 'The number of services provided by physicians, hospitals, and nursing homes is continuously increasing.'
    },
]

const OurService = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center welcome__heading">Our Services</div>
            </div>
            <div className="container mb-5 pt-4">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row gy-5">
                            {
                                data.map(({ id, image, card_title, link, card_text }) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 col-10-mx-auto">
                                            <div className="card h-100">
                                                <span className="img__bg">
                                                    <img src={image} className="card-img-top mx-auto d-block my-4" alt="Claim" />
                                                </span>
                                                <NavLink to={link} className="card__body">
                                                <div className="card-body">
                                                    <h5 className="card-title">{card_title}</h5>
                                                    <p className="card-text pt-3">{card_text}
                                                    </p>
                                                </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService