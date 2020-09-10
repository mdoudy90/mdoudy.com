import React, { useEffect, useState, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Ufo } from './components/Ufo';

export const App = () => {
  const [ufoMarginTop, setUfoMarginTop] = useState(-280);
  const [rayDisplay, setRayDisplay] = useState([0, 0, 0, 0, 0]);
  const [intID, setIntID] = useState();
  const pageRef = useRef(null);
  let marginTop = ufoMarginTop + 'px';

  const moveUfo = (direction) => {
    let marginTop = document.getElementById('ufo').offsetTop;
    let ufoDownInterval = setInterval(() => {
      if (direction === 'down') marginTop += 10;
      if (direction === 'up') marginTop -= 5;
      setUfoMarginTop(marginTop);
    }, 25);
    setIntID(ufoDownInterval);
  };

  useEffect(() => {
    if (ufoMarginTop >= 320) {
      clearInterval(intID);
      let counter = 0;
      let raysDownInterval = setInterval(() => {
        counter += 10;
        if (counter > 80) setRayDisplay([1, 0, 0, 0, 0]);
        if (counter > 120) setRayDisplay([1, 1, 0, 0, 0]);
        if (counter > 160) setRayDisplay([1, 1, 1, 0, 0]);
        if (counter > 200) setRayDisplay([1, 1, 1, 1, 0]);
        if (counter > 240) {
          setRayDisplay([1, 1, 1, 1, 1]);
        }
        if (counter > 250) {
          clearInterval(raysDownInterval);
          moveUfo('up');
        }
      }, 25);
      setIntID(raysDownInterval);
    }
    if (ufoMarginTop < -280) clearInterval(intID);
  }, [ufoMarginTop]);

  // useEffect(() => {
  //   disableBodyScroll(pageRef.current);
  // }, [pageRef]);

  return (
    <div className='app-container' ref={pageRef}>
      {/* <Header /> */}
      {/* <Main /> */}
      <Ufo marginTop={marginTop} rayDisplay={rayDisplay} />
      <Main moveUfo={moveUfo} />
      <Projects />
      <Skills />
      <About />
      <ContactForm />
    </div>
  );
};
