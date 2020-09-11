import React, { useEffect, useState } from 'react';

export const Menu = ({ setView }) => {
  return (
    <div className='menu-container'>
      <div className='menu-options'>
        <h2 onClick={()=>setView('projects')}>Projects</h2>
        <h2 onClick={()=>setView('resume')}>Resume</h2>
        <h2 onClick={()=>setView('skills')}>Skills</h2>
        <h2 onClick={()=>setView('about')}>About</h2>
        <h2 onClick={()=>setView('contact')}>Contact</h2>
      </div>
    </div>
  );
};
