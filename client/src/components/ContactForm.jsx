import React, { useEffect, useState } from 'react';

export const ContactForm = () => {
  return (
    <div className='module-container'>
      {/* <h2>Contact</h2> */}
      <form className='contact-form' action='mailto:michael.doudy@gmail.com' method='post' enctype='text/plain'>
        <div className='contact-links'>
          <h4>
            If you prefer to contact me directly, send your email to:{' '}
            <a href='mailto:michael.doudy@gmail.com'>michael.doudy@gmail.com</a>. Connect with me on <a href='https://www.linkedin.com/in/mdoudy/'>LinkedIn</a> or find me on <a href='https://github.com/mdoudy90'>GitHub</a>.
          </h4>
        </div>
        <div className='contact-inputs'>
          <div>
            <h3>Name:</h3>
            <input type='text' name='name' maxlength='100' />
          </div>
          <div>
            <h3>Email:</h3>
            <input type='email' name='mail' maxlength='100' />
          </div>
          <div>
            <h3>Message:</h3>
            <textarea type='text' name='comment' size='50' maxlength='1000' />
          </div>
          <button
            onClick={() => {
              console.log('sent');
            }}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
