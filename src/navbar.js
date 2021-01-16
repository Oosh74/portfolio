import React, { useState, useEffect } from 'react';
import _ from 'underscore';

const Navbar = () => {
  const [buttonScroll, setButtonScroll] = useState(false);
  const [section, setSection] = useState({
    home: 'inactive',
    about: 'inactive',
    port: 'inactive',
    cont: 'inactive',
  });

  const ininitalState = {
    home: 'inactive',
    about: 'inactive',
    port: 'inactive',
    cont: 'inactive',
  };

  const { home, about, port, cont } = section;

  const handleScroll = () => {
    if (
      window.scrollY >= 0 &&
      window.scrollY <= 649 &&
      home === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setSection({ ...ininitalState, home: 'active' });
    } else if (
      window.scrollY >= 650 &&
      window.scrollY <= 1449 &&
      about === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setSection({ ...ininitalState, about: 'active' });
    } else if (
      window.scrollY >= 1500 &&
      window.scrollY < 1999 &&
      port === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setSection({ ...ininitalState, port: 'active' });
    } else if (
      window.scrollY >= 2000 &&
      cont === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setSection({ ...ininitalState, cont: 'active' });
    }
  };

  useEffect(() => {
    console.log('STATE ----', section);
    console.log('BUTTON', buttonScroll);

    const throttledCount = _.throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledCount, { passive: true });

    return () =>
      window.removeEventListener('scroll', throttledCount, { passive: true });
  });

  const handleClick = (button, x, y) => {
    setButtonScroll(true);

    if (button === 1 && home === 'inactive') {
      setSection({ ...ininitalState, home: 'active' });
      console.log(home);
    } else if (button === 2) {
      setSection({ ...ininitalState, about: 'active' });
    } else if (button === 3) {
      setSection({ ...ininitalState, port: 'active' });
    } else if (button === 4) {
      setSection({ ...ininitalState, cont: 'active' });
    }

    window.scrollTo({
      top: x,
      left: y,
      behavior: 'smooth',
    });

    setTimeout(function () {
      setButtonScroll(false);
    }, 750);
  };

  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <button className={home} onClick={() => handleClick(1, 0, 0)}>
          Home
        </button>
        <button className={about} onClick={() => handleClick(2, 650, 0)}>
          About
        </button>
        <button className={port} onClick={() => handleClick(3, 1500, 0)}>
          Portfolio
        </button>
        <button className={cont} onClick={() => handleClick(4, 2300, 0)}>
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
