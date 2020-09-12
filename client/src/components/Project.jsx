import React, { useEffect, useState } from 'react';

export const Project = ({name, explanation, image, githubLink, liveDemoLink}) => {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img src = {image} />
        <div className='project-caption'>
          <h3>{name}</h3>
        </div>
      </div>
      <h5>{explanation}</h5>
      {/* <div className='project-icons'> */}
        {/* <a href={githubLink}><img src='./assets/github-gray-icon.png'/></a> */}
        {/* <a className='info-icon' href=''><img src='./assets/info-gray-icon.png'/></a> */}
        <div className='info-icon'>i</div>
      {/* </div> */}
    </div>
  );
};
