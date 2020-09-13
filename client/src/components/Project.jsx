import React, { useEffect, useState } from 'react';

export const Project = ({ name, explanation, image, githubLink, liveDemoLink, techStack, apis }) => {
  const [detailsView, toggleDetailsView] = useState(false);

  return (
    <div className='project-container'>
      {detailsView ? (
        <div className='selected-project' onClick={() => toggleDetailsView(!detailsView)}>
          <div className='selected-project-details'>
            <div>
              <h3>TECH STACK:</h3>
              {techStack.map((technology) => (
                <h3>{technology}</h3>
              ))}
            </div>
            {!!apis.length && (
              <div>
                <h3>APIS USED:</h3>
                {apis.map((api) => (
                  <h3>{api}</h3>
                ))}
              </div>
            )}
          </div>
          <div className='selected-project-links'>
            {!!liveDemoLink.length && (
              <a href={liveDemoLink} target='_blank' onClick={(e) => e.stopPropagation()}>
                <img src='./assets/demo-icon.png' />
              </a>
            )}
            <a href={githubLink} target='_blank' onClick={(e) => e.stopPropagation()}>
              <img src='./assets/github-green-icon.png' />
            </a>
          </div>
        </div>
      ) : (
        <div className='project' onClick={() => toggleDetailsView(!detailsView)}>
          <div className='project-image-container'>
            <img src={image} />
          </div>
          <div className='project-caption'>
            <h3>{name}</h3>
          </div>
          <h5 className='project-info'>{explanation}</h5>
          {/* <div className='project-icons'> */}
          {/* <a href={githubLink}><img src='./assets/github-gray-icon.png'/></a> */}
          {/* <a className='info-icon' href=''><img src='./assets/info-gray-icon.png'/></a> */}
          {/* <a href={githubLink} target='_blank'> */}
          <a>
            <div className='info-icon'>i</div>
          </a>
        </div>
      )}
    </div>
  );
};
