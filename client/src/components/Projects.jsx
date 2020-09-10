import React, { useEffect, useState } from 'react';
import { Project } from './Project';
import { projectData } from '../data/data';

export const Projects = () => {
  return (
    <div className='module-container' id='projects'>
      <h2>Projects</h2>
      <div className='projects'>
        {projectData.map(({ name, explanation, image, githubLink, liveDemoLink }) => {
          return (
            <Project
              name={name}
              explanation={explanation}
              image={image}
              githubLink={githubLink}
              liveDemoLink={liveDemoLink}
            />
          );
        })}
      </div>
    </div>
  );
};
