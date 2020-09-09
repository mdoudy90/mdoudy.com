import React, { useEffect, useState } from 'react';

export const Ufo = ({marginTop, rayDisplay}) => {
  const raySizes = [80, 110, 140, 170, 200];

  return (
    <div id='ufo' className='ufo-container' style={{ marginTop }}>
      <div className='ufo'>
      <img src='./assets/ufo-icon.png' />
        {raySizes.map((width, index) => {
          return <img
          id={`ray${index}`}
          className = {rayDisplay[index] ? 'ray-visible' : 'ray'}
          style={{ width }}
          src='./assets/ray-icon.png' />;
        })}
      </div>
    </div>
  );
};
