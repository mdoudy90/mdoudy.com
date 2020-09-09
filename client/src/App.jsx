import React, { useEffect, useState, useRef } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Ufo } from './components/Ufo';

export const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [ufoMarginTop, setUfoMarginTop] = useState(-280);
  const [rayDisplay, setRayDisplay] = useState([0, 0, 0, 0, 0]);
  const pageRef = useRef(null);

  const onScroll = () => {
    const scrollY = window.scrollY;
    const newScrollTop = pageRef.current.scrollTop;
    // console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${newScrollTop}`);
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    const marginTop = document.getElementById('ufo').offsetTop;
    if (scrollTop < 240 && ufoMarginTop < 50) setUfoMarginTop(marginTop + 40);
    if (scrollTop >= 260) setUfoMarginTop(marginTop - 25);
    if (scrollTop > 80) setRayDisplay([1, 0, 0, 0, 0]);
    if (scrollTop > 120) setRayDisplay([1, 1, 0, 0, 0]);
    if (scrollTop > 160) setRayDisplay([1, 1, 1, 0, 0]);
    if (scrollTop > 200) setRayDisplay([1, 1, 1, 1, 0]);
    if (scrollTop > 240) setRayDisplay([1, 1, 1, 1, 1]);
  }, [scrollTop]);

  let marginTop = ufoMarginTop + 'px';
  console.log(marginTop);

  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}

      <div
        ref={pageRef}
        onScroll={onScroll}
        style={{
          height: '100vh',
          overflow: 'scroll',
        }}>
        <Ufo marginTop={marginTop} rayDisplay={rayDisplay} />
        <Main />
        <Projects />
        <Skills />
        <About />
        <ContactForm />
      </div>
    </>
  );
};
