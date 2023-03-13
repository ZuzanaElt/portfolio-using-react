import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n5ndsk5', 'contact for to Zuzana', form.current, 'HzJ2zCbcm-ePZvnbE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-layout">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div >
            <p className="get-in-touch">To get in touch with me fill in the form:</p>
            <div className="form-fields">
            <label >Name   </label>
            <input type="text" name="user_name" className="fields" />
          </div>
            <div className="form-fields">
            <label>Email  </label>
            
            <input type="email" name="user_email" required className="fields" />
            </div>
            <div className="form-fields textarea" >
            <label>Message</label>
            <textarea name="message" className="fields" />
            </div>
            <div className="submit-button">
            <input type="submit" value="Send"  />
          </div>
          </div>
        </form>
    </div>
  );
};

export default Contact