import React, { useEffect, useState, useRef } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

export const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [ufoMarginTop, setUfoMarginTop] = useState(-280);
  const pageRef = useRef(null);

  const onScroll = () => {
    const scrollY = window.scrollY;
    const newScrollTop = pageRef.current.scrollTop;
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${newScrollTop}`);
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    const marginTop = document.getElementById('ufo').offsetTop;
    if (scrollTop <= 270 && ufoMarginTop < 50) { setUfoMarginTop(marginTop + 50) }
    if (scrollTop > 270) { setUfoMarginTop(marginTop - 50) }
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

        <img
          id='ufo'
          className='ufo'
          style={{
            marginTop
          }}
          src='./assets/ufo-icon.png'
        />
        <Main />
        <Projects />
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scrollTop}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scrollTop}</p>

      </div>
    </>
  );
};
