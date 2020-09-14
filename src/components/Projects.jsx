import React, { useEffect, useState } from 'react';
import { Project } from './Project';
import { projectData } from '../data/data';

export const Projects = () => {
  return (
    <div className='module-container' id='projects'>
      <div className='projects'>
        {projectData.map(({ name, explanation, image, githubLink, liveDemoLink, techStack, apis }) => {
          return (
            <Project
              name={name}
              explanation={explanation}
              image={image}
              githubLink={githubLink}
              liveDemoLink={liveDemoLink}
              techStack={techStack}
              apis={apis}
            />
          );
        })}
      </div>
    </div>
  );
};
