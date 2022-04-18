import React from 'react'
import './Contact.scss'
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <div>
        <div>
          <div class="billboard">
            <div class="container">
              <div class="billboard-header ">
                <h2 class="billboard-title text-xl pb-1">We’re just an email or
                  phone call away.</h2>
              </div>

            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row">

            <div className="col-md-8">

              <div className="contact__form">
                <form /*ref={form} onSubmit={sendEmail} */ className="app__footer-form d-flex align-items-center justify-content-center">

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="text" placeholder="Enter Name" name="name" required />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="email" placeholder="Enter Email" name="email" required />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="email" placeholder="Enter Phone" name="number" required />
                  </div>

                  <div>
                    <textarea
                      className="p-text"
                      placeholder="Enter Message"
                      name="message"
                      required
                    />
                  </div>

                  <button type="submit"
                    className="p-text" >Send Message
                  </button>

                  {/* <div className='TQ_Msg'
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              exit={{ y: -1000 }}>
              {result ? <Result /> : null}
            </div> */}
                </form>
              </div>
            </div>

            <div className="col-md-4 find__bg">
              <div className="d-grid gap-2 text__colo contact__form">
                <h2>FIND US</h2>
                <div>
                  <span className='check'><HiLocationMarker /> </span>
                  123 Madison Ave, Suite xyz
                  New York NY 123456
                </div>

                <div class="m-t-25"><strong class="in-heading">SALES</strong>

                  <div className='links__phone'>
                    <a href="mailto:info@hrx.company"><span className='check'><IoMdMail /> </span> hshcrs.com</a>
                  </div>
                  <div className='links__phone'>
                    <a href="tel:877-770-2023"><span className='check'><IoIosCall /> </span>123456789</a>
                  </div>
                </div>
                <div class="m-t-25"><strong class="in-heading">Support</strong>
                  <div className='links__phone'>
                    <a href="mailto:info@hrx.company"><span className='check'><IoMdMail /> </span> hshcrs.com</a>
                  </div>
                  <div className='links__phone'>
                    <a href="tel:877-770-2023"><span className='check'><IoIosCall /> </span>123456789</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default Contact