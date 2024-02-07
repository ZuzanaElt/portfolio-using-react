import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Modal from './Modal';




export const Contact = () => {
  const [isModalopen, setModalOpen] = useState(false);
  const form = useRef();
  const sendEmail = (event) => {
   event.preventDefault()
   ;
  emailjs.sendForm( 'service_n5ndsk5',                     
                    'contact for to Zuzana', 
                    form.current, 
                    'HzJ2zCbcm-ePZvnbE')
      .then((result) => {
          console.log('worked' , result.text);
          
      }, (error) => {
          console.log('Not Working',error.text);
      });

      
      
  };

  return (
    <div className="contact-layout">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div >
            <p className="get-in-touch">To get in touch with me send me a message through this form. Or contact me through GitHub/LinkedIn.
             Alternatively email me on zuzanaknightova@gmail.com.</p>
            <div className="form-fields">
            <label for="user_name"> Name</label>
            <input type="text" 
                    name="user_name" 
                    className="fields" 
                    id="user_name"
                    
                    />
          </div>
            <div className="form-fields">
            <label for="user_email">Email  </label>
            
            <input type="email" name="user_email" required className="fields" id="user_email" />
            </div>
            <div className="form-fields textarea" >
            <label for="message">Message</label>
            <textarea name="message" className="fields" id="message" />
            </div>
            <div className="submit-button">
            <button type="submit" value="Send" 
            onClick={() => setModalOpen(true)}>Send message</button>
           
           {isModalopen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <h2>Thank you for your message.</h2>
                  <p>I will contact you shortly.</p>
                </Modal>
)}
          </div>
          </div>
        </form>
    </div>
  );
};

export default Contact