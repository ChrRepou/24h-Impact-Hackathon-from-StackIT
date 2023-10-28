// src/Navbar.js
import reactImg from '../../assets/logo.png';
import React, { useState, useEffect } from 'react';

function Navbar() {
  let className = 'default';
  let text = 'default';

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  if (!(hours >= 11 && hours < 15))
  {
    className = 'text-light';
    text = "Mensa is closed";
  }
  else if (!(hours >= 13 && hours < 15)) {
    className = 'text-success';
    text = "Low Visiting";
  } else {
    className = 'text-danger';
    text = "High Visiting";
  }




  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={reactImg}
            alt="Your Logo"
            width="50"
            height="50"
          />
		  My Mensa Menu
        </a>
        <ul>
          <li className={className}>{text}</li> {/* we should modify depending on the amount of people entering*/ }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
