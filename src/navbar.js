import React, { useState } from 'react';

const Navbar = () => {
  const [state, setActive] = useState({
    home: 'inactive',
    about: 'inactive',
    port: 'inactive',
    cont: 'inactive',
  });

  const handleClick = (button, x, y) => {
    if (button === 1) {
      setActive({
        home: 'active',
        about: 'inactive',
        port: 'inactive',
        cont: 'inactive',
      });
    } else if (button === 2) {
      setActive({
        home: 'inactive',
        about: 'active',
        port: 'inactive',
        cont: 'inactive',
      });
    } else if (button === 3) {
      setActive({
        home: 'inactive',
        about: 'inactive',
        port: 'active',
        cont: 'inactive',
      });
    } else if (button === 4) {
      setActive({
        home: 'inactive',
        about: 'inactive',
        port: 'inactive',
        cont: 'active',
      });
    }

    window.scrollTo({
      top: x,
      left: y,
      behavior: 'smooth',
    });
  };

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
