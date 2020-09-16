import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import GitHubIcon from '../assets/github-icon.png';
import LinkedInIcon from '../assets/linkedin-icon.png';
import MailIcon from '../assets/mail-icon.png';

let bool = true;

export const Main = ({ moveUfo }) => {
  const [buttonJiggling, toggleButtonJiggling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleButtonJiggling(true);
    }, 10000)
  }, [])

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
            onClick={() => {
              toggleButtonJiggling(false);
              moveUfo('down');
            }}>
            <div className='arrow' button-jiggling={`${buttonJiggling}`}>
              <div className='arrow-top'></div>
              <div className='arrow-bottom'></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
