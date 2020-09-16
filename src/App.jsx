import React, { useEffect, useState, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Ufo } from './components/Ufo';

export const App = () => {
  const [ufoMarginTop, setUfoMarginTop] = useState(-280);
  const [rayDisplay, setRayDisplay] = useState([0, 0, 0, 0, 0]);
  const [intID, setIntID] = useState();
  const [view, setView] = useState('menu');
  const [mainButtonClicked, setMainButtonClicked] = useState(false);
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  const pageRef = useRef(null);
  let marginTop = ufoMarginTop + 'px';

  const moveUfo = (direction) => {
    let marginTop = document.getElementById('ufo').offsetTop;
    let ufoDownInterval = setInterval(() => {
      if (direction === 'down') marginTop += 10;
      if (direction === 'up') marginTop -= 4;
      setUfoMarginTop(marginTop);
    }, 25);
    setIntID(ufoDownInterval);
  };

  useEffect(() => {
    const width = window.innerWidth;
    if ((width > 800 && ufoMarginTop >= 420) || (width <= 800 && ufoMarginTop >= 300)) {
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
    if (ufoMarginTop < -280) {
      clearInterval(intID);
      setMainButtonClicked(true);
    }
  }, [ufoMarginTop]);

  useEffect(() => {
    disableBodyScroll(pageRef.current);
  }, [pageRef]);

  useEffect(() => {
    // For mobile - if accidental refresh happens
    if (!mainButtonClicked && view !== 'menu') {
      setMainButtonClicked(true);
      clearAllBodyScrollLocks();
    }
    if (mainButtonClicked) clearAllBodyScrollLocks();

    // For menu button display
    if (view !== 'menu' && !menuButtonClicked) setMenuButtonClicked(true);
  }, [view]);

  return (
    <div className='app-container' ref={pageRef}>
      {!mainButtonClicked && (
        <>
        {!!intID &&
          <div className='stars-container'>
            {[...Array(75).keys()].map((x) => {
              let starDimension = `${Math.random() * 2}px`;
              let starXCoordinate = `${Math.random() * window.innerHeight}px`;
              let starYCoordinate = `${Math.random() * window.innerWidth}px`;
              return (
                <div
                  style={{
                    position: 'absolute',
                    width: starDimension,
                    height: starDimension,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    marginTop: starXCoordinate,
                    marginLeft: starYCoordinate
                  }}></div>
              );
            })}
          </div>}
          <Ufo marginTop={marginTop} rayDisplay={rayDisplay} />
          <Main moveUfo={moveUfo} />
        </>
      )}
      <div id='views' className='views-container'>
        {menuButtonClicked && (
          <div className='plus-btn-pos'>
            <div
              className={view !== 'menu' ? 'plus-btn' : 'plus-btn menu-open-plus-btn'}
              onClick={() => setView('menu')}>
              <div className='r1'></div>
              <div className='r2'></div>
            </div>
          </div>
        )}

        {view === 'menu' && <Menu setView={setView} />}
        {view === 'projects' && <Projects />}
        {view === 'resume' && <p>resume</p>}
        {view === 'about' && <About />}
        {view === 'contact' && <ContactForm />}
      </div>
    </div>
  );
};
