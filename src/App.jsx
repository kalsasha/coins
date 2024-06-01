import './App.css'; // Стилі можна додати

import { useState } from 'react';

function LandingPage() {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <div className="header">
          <h1 className="title gradient-text">Pure Men`s Love #LGBT</h1>
        </div>
        <div className="coin">
          <div className="img">
            <img
              className={isRotated ? 'rotate-on-click' : ''}
              onClick={handleClick}
              src="/1.webp"
              alt="alt"
            />
          </div>
          <div className="btns">
            <a
              className="btn"
              href="https://t.me/puremenslove"
              target="_blank"
            >
              Telegram
            </a>

            <a
              className="btn"
              href="https://x.com/dnldslttltrip"
              target="_blank"
            >
            </a>

            <a className="btn" href="" target="_blank">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
