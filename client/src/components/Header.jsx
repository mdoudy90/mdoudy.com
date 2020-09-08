import React, { useEffect, useState } from 'react';

export const Header = () => {
  return (
    <div className='header-container'>
      <a><h4>Home</h4></a>
      <a><h4>Projects</h4></a>
      <a><h4>Resume</h4></a>
      <a><h4>About</h4></a>
      <a><h4>Contact</h4></a>
    </div>
  );
};
