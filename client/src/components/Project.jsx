import React, { useEffect, useState } from 'react';

export const Project = ({name, explanation, image, githubLink, liveDemoLink}) => {
  return (
    <div className='project'>
      <img src = {image} />
      <h3>{name}</h3>
      <h5>{explanation}</h5>
      <button>Github Logo</button>
      <button>Live Demo</button>
      <button>i</button>
    </div>
  );
};
