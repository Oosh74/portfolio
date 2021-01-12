import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [state, setActive] = useState({
    home: 'inactive',
    about: 'inactive',
    port: 'inactive',
    cont: 'inactive',
  });
  const [buttonScroll, setButtonScroll] = useState(false);

  const ininitalState = {
    home: 'inactive',
    about: 'inactive',
    port: 'inactive',
    cont: 'inactive',
  };

  const handleClick = (button, x, y) => {
    setButtonScroll(true);

    if (button === 1 && home === 'inactive') {
      setActive({ ...ininitalState, home: 'active' });
      console.log(home);
    } else if (button === 2) {
      setActive({ ...ininitalState, about: 'active' });
    } else if (button === 3) {
      setActive({ ...ininitalState, port: 'active' });
    } else if (button === 4) {
      setActive({ ...ininitalState, cont: 'active' });
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

  const handleScroll = () => {
    if (
      window.scrollY >= 0 &&
      window.scrollY <= 749 &&
      home === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setActive({ ...ininitalState, home: 'active' });
    } else if (
      window.scrollY >= 750 &&
      window.scrollY <= 1449 &&
      about === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setActive({ ...ininitalState, about: 'active' });
    } else if (
      window.scrollY >= 1500 &&
      window.scrollY < 1999 &&
      port === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setActive({ ...ininitalState, port: 'active' });
    } else if (
      window.scrollY >= 2000 &&
      cont === 'inactive' &&
      buttonScroll === false
    ) {
      console.log('REACHED!');
      setActive({ ...ininitalState, cont: 'active' });
    }
  };

  useEffect(() => {
    console.log('STATE ----', state);
    console.log('BUTTON', buttonScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [state, buttonScroll]);

  const { home, about, port, cont } = state;

  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <button className={home} onClick={() => handleClick(1, 0, 0)}>
          Home
        </button>
        <button className={about} onClick={() => handleClick(2, 750, 0)}>
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
