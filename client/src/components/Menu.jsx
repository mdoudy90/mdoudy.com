import React, { useEffect, useState } from 'react';

export const Menu = ({ setView }) => {
  return (
    <div className='menu-container'>
      <div className='menu-options'>
        <h2 onClick={()=>setView('projects')}>Projects</h2>
        <a href='./assets/Michael-Doudy-Resume.pdf' target='_blank'><h2>Resume</h2></a>
        <h2 onClick={()=>setView('about')}>About</h2>
        <h2 onClick={()=>setView('contact')}>Contact</h2>
      </div>
    </div>
  );
};
