import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.scss'
import { IoMdMail } from 'react-icons/io';
import { ImSkype } from 'react-icons/im';
import { TabTitle } from '../util/GeneralFunctions';

const Result = () => {
  return (
    <h3>
      Thank you for getting in <span>touch!</span>
    </h3>
  )
}

const Contact = () => {
  TabTitle('Contact | HSHCRS');

  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9oezznp', 'template_26p63b3', form.current, '8oIy_-5wdQJoEv9Nj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

  //Hide Result
  setTimeout(() => {
    showResult(false);
  }, 5000);


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
                <form ref={form} onSubmit={sendEmail} className="app__footer-form d-flex align-items-center justify-content-center">

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="text" placeholder="Enter Name" name="name" required />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="email" placeholder="Enter Email" name="user_email" required />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <input className="p-text" type="phone" placeholder="Enter Phone" name="number" required />
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

                  <div className='TQ_Msg'>
                    {result ? <Result /> : null}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4 find__bg">
              <div className="d-grid gap-2 text__colo contact__form">
                <h2>FIND US</h2>
                <div class="m-t-25"><strong class="in-heading">SALES</strong>

                  <div className='links__phone'>
                    <a href="mailto:info@hshcrs.com"><span className='check'><IoMdMail /> </span> info@hshcrs.com</a>
                  </div>
                  <div className='links__phone'>
                    <a href="skype:live:.cid.e9f270f370577de?userinfo"><span className='check'><ImSkype /> </span>info.skype</a>
                  </div>
                </div>
                <div class="m-t-25"><strong class="in-heading">Support</strong>
                  <div className='links__phone'>
                    <a href="mailto:support@hshcrs.com"><span className='check'><IoMdMail /> </span> support@hshcrs.com</a>
                  </div>
                  <div className='links__phone'>
                    <a href="skype:live:.cid.e9f270f370577de?userinfo"><span className='check'><ImSkype /> </span>support.skype</a>
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