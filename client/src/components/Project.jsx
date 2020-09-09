import React, { useEffect, useState } from 'react';

export const Project = ({name, explanation, image, githubLink, liveDemoLink}) => {
  return (
    <div className='project'>
      <img src = {image} />
      <h3>{name}</h3>
      <h5>{explanation}</h5>
      <div className='project-icons'>
        <a href={githubLink}><img src='./assets/github-gray-icon.png'/></a>
        <a href=''><img src='./assets/info-gray-icon.png'/></a>
      </div>
    </div>
  );
};
