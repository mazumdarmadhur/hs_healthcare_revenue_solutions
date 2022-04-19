import React from 'react'
import './About.scss'
import imageAbout from '../../assets/imageAbout.svg'
import { TabTitle } from '../util/GeneralFunctions'

const About = () => {
  TabTitle('About | HSHCRS')

  return (
    <>
      <div className="container my-5 ">
        <div className="row ">
          <div className="col-md-12">
            <div className="inner__text">
              <h2>WELCOME TO HS HEALTHCARE REVENUE SOLUTIONS</h2>
              <p>We are a high yield and technology-empowered Healthcare RCM outsourcing company that provides medical billing and medical coding services to prime healthcare providers across the United States and the entire world.</p>
              <p>Our comprehensive healthcare RCM industry expertise includes end to end revenue cycle management with an experience that has been acquired over a long time. Equipped with a comprehensive understanding of our client's business requirements as well as the challenges, and the support of our highly skilled team of professionals grants us leverage to provide the best and most practical solutions in denial management in healthcare. With a prompt and seamless flow of payments and no day-to-day billing issues in medical billing, you can now focus on expanding the clientele base, adding treatment options and new healthcare specialities, and acquiring new business.</p>

              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>Our Mission:</h2>
                  <p>To enrich and enhance our client’s experience by presenting zealous and swift execution of solutions through meticulous surveillance of quality and security. A complete healthcare solutions company addressing the billing challenges of the healthcare industry, providing the end to end healthcare solutions directly to a one-stop solution with a prompt and seamless flow of payments.</p>
                  <h2>Our Values:</h2>
                  <p>We are devoted to provisioning our clients with passion and prominence. The values we practice include confidentiality, integrity,  and commitment to our clients. To sum up, we are focused on providing the best quality services and consultancy to our community of clients.</p>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={imageAbout} alt="Mission and Values" srcset="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About