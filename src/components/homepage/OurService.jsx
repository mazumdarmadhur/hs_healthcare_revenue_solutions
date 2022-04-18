import React from 'react'
import Claim from '../../assets/claim.svg'
import Payment_posting from '../../assets/payment-posting.svg'
import Audit from '../../assets/audit.svg'
import Credentialing from '../../assets/credentialing.svg'
import Eft from '../../assets/eft.svg'
import Management_oversite from '../../assets/management-oversite.svg'
import Patient_statement from '../../assets/patient-statement.svg'
import Rcm_service from '../../assets/rcm-service.svg'

const data = [
    {
        id: 1,
        image: Claim,
        card_title: 'Claim',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 2,
        image: Payment_posting,
        card_title: 'Payment posting',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 3,
        image: Rcm_service,
        card_title: 'RCM',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 4,
        image: Eft,
        card_title: 'EFT/ERA',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 5,
        image: Credentialing ,
        card_title: 'Credentialing',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 6,
        image: Audit ,
        card_title: 'Audit',
        card_text: 'The Audit Department ensures quality by reducing Rejections and error percentage and increase the practice reimbursement'
    },
    {
        id: 7,
        image: Management_oversite ,
        card_title: 'management oversite',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
    {
        id: 8,
        image: Patient_statement ,
        card_title: 'Patient statements',
        card_text: 'Amet minim mollit non deserunt ullamco est sit'
    },
]

const OurService = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center welcome__heading">Our Services</div>
            </div>
            <div className="container-fluid mb-5 pt-4">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row gy-5">
                            {
                                data.map(({ id, image, card_title, card_text }) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 col-10-mx-auto">
                                            <div className="card">
                                                <span className="img__bg">
                                                    <img src={image} className="card-img-top mx-auto d-block my-4" alt="Claim" />
                                                </span>
                                                <div className="card-body">
                                                    <h5 className="card-title">{card_title}</h5>
                                                    <p className="card-text pt-3">{card_text}</p>
                                                </div>
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