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
          <h1 className="title">$LGBTCagedChi</h1>
        </div>
        <div className="coin">
          <div className="img">
            <img
              className={isRotated ? 'rotate-on-click' : ''}
              onClick={handleClick}
              src="/1.jpg"
              alt="Chi"
            />
          </div>
          <div className="btns">
            <a
              className="btn"
              href="https://t.me/+WGMfj9l7OaI1YmYy"
              target="_blank"
            >
              Telegram
            </a>

            <a className="btn" href="https://x.com/dtmemcoin" target="_blank">
              X
            </a>

            <a
              className="btn"
              href="https://pump.fun/8TiNe2wuLne3uYiy74gfhDnEDRgQCNX2B1tV4SVZuVRF"
              target="_blank"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
