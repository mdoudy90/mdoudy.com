import React, { useEffect, useState } from 'react';
import { Project } from './Project';

export const Projects = () => {
  const projectData = [
    {
      name: 'Coding Interview App',
      explanation: 'Under construction',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/jmtss20/codingInterviewApp',
      liveDemoLink: '',
    },
    {
      name: 'Find My Friends',
      explanation:
        'Mobile first application that uses Google Maps, Google Places, and HTML5 Geolocation tracking to help find a local place to go to with friends.',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/mdoudy90/find-my-friends',
      liveDemoLink: 'https://stormy-meadow-54442.herokuapp.com/',
    },
    {
      name: 'Retail Web Portal',
      explanation:
        'This client-facing web portal was built out by a team of 3 devs over a span of 2 weeks following a 26 page business requirements document.',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/mdoudy90/Retail-Web-Portal',
      liveDemoLink: '',
    },
    {
      name: 'Reviews API Service',
      explanation:
        'Scalable RESTful API service built for a retail web-portal and optimized to handle web-scale traffic.',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/HR-SDC-CANOPUS/Reviews-API',
      liveDemoLink: '',
    },
    {
      name: 'Crypto Paper Trader',
      explanation:
        'This cryptocurrency paper trading app was built during a mini-hackathon over a span of 3 days and eventually migrated from JavaScript to TypeScript.',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/mdoudy90/Crypto-Paper-Trader',
      liveDemoLink: 'https://cryptic-crag-78444.herokuapp.com/',
    },
    {
      name: 'Portfolio Website',
      explanation: 'Inception!',
      image: './assets/TempPhoto.png',
      githubLink: 'https://github.com/mdoudy90/mdoudy.com',
      liveDemoLink: '',
    },
  ];

  return (
    <div className='projects-container'>
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