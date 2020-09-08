import React, { useEffect, useState } from 'react';

export const Main = () => {
  return (
    <div className='main-overview'>
      <div className='top-half'>
        <h1>Michael Doudy</h1>
      </div>
      <div className='bottom-half'>
        <h2>Software Engineer</h2>
        <div className='icons'>
          <a href="https://github.com/mdoudy90"><img src='./assets/github-icon.png'/></a>
          <a href="https://www.linkedin.com/in/mdoudy/"><img src='./assets/linkedin-icon.png'/></a>
          <a href="mailto:michael.doudy@gmail.com"><img src='./assets/mail-icon.png'/></a>
        </div>
      </div>
    </div>
  );
};
