import React, { useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';

function Contact  () {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjbh1wv', 'template_wfohked', form.current, 'fBNQev88fJtmzcn6E')
      .then((result) => {
          console.log(result.text);
          alert('Your request submited') 
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
    };

    

    
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" /> 
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_email' placeholder='Email'/>
                    <textarea name="message"  placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                    <p id='tag'></p>
                </form>
            </div>
        </div>
    )
}

export default Contact;

