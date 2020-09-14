import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

export const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      service_id: 'service_5z7y8jn',
      template_id: 'template_5nnm02y',
      user_id: 'user_meXps9rqco8I9FY3mGffU',
      template_params: {
        from_name: name,
        reply_to: email,
        message: message,
      },
    };

    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((res) => setFormSubmitted(true))
      .catch((err) => console.error('Failed to send email. Error: ', err));

    setFormSubmitted(true);
  };

  return (
    <div className='module-container'>
      <form className='contact-form' onSubmit={handleSubmit} id='contact-form'>
        {formSubmitted ? (
          <div>
            <h3>Your transmission has been sent!</h3>
          </div>
        ) : (
          <>
            <div className='contact-links'>
              <h4>
                If you prefer to contact me directly, send your email to:{' '}
                <a href='mailto:michael.doudy@gmail.com'>michael.doudy@gmail.com</a>. Connect with me on{' '}
                <a href='https://www.linkedin.com/in/mdoudy/'>LinkedIn</a> or find me on{' '}
                <a href='https://github.com/mdoudy90'>GitHub</a>.
              </h4>
            </div>
            <div className='contact-inputs'>
              <div>
                <h3>Name:</h3>
                <input type='text' maxlength='100' required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <h3>Email:</h3>
                <input type='email' maxlength='100' required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <h3>Message:</h3>
                <textarea
                  type='text'
                  size='50'
                  maxlength='1000'
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type='submit' form='contact-form' value='Submit'>
                Send
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
