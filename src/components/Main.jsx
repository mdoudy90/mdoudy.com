import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import GitHubIcon from '../assets/github-icon.png';
import LinkedInIcon from '../assets/linkedin-icon.png';
import MailIcon from '../assets/mail-icon.png';

export const Main = ({ moveUfo }) => {
  return (
    <div className='main-overview'>
      <div className='top-half'>
        <h1>Michael Doudy</h1>
      </div>
      <div className='bottom-half'>
        <h2>Software Engineer</h2>
        <div className='icons'>
          <a href='https://github.com/mdoudy90'>
            <img src={GitHubIcon} />
          </a>
          <a href='https://www.linkedin.com/in/mdoudy/'>
            <img src={LinkedInIcon} />
          </a>
          <a href='mailto:michael.doudy@gmail.com'>
            <img src={MailIcon} />
          </a>
          <Link
            className='scroll-button'
            activeClass='active'
            to='views'
            spy={true}
            smooth={true}
            delay={2300}
            duration={1000}
            onClick={() => moveUfo('down')}>
            <div className='arrow'>
              <div className='arrow-top'></div>
              <div className='arrow-bottom'></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
