import React, { useEffect, useState } from 'react';
import UfoIcon from '../assets/ufo-icon.png';
import RayIcon from '../assets/ray-icon.png';

export const Ufo = ({marginTop, rayDisplay}) => {
  const raySizes = [80, 110, 140, 170, 200];

  return (
    <div id='ufo' className='ufo-container' style={{ marginTop }}>
      <div className='ufo'>
      <img src={UfoIcon} />
        {raySizes.map((width, index) => {
          return <img
          id={`ray${index}`}
          className = {rayDisplay[index] ? 'ray-visible' : 'ray'}
          style={{ width }}
          src={RayIcon} />;
        })}
      </div>
    </div>
  );
};
