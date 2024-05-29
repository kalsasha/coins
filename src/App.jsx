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
          <h1 className="title">Reddit On Solana</h1>
        </div>
        <div className="coin">
          <div className="img">
            <img
              className={isRotated ? 'rotate-on-click' : ''}
              onClick={handleClick}
              src="/1.webp"
              alt="Chi"
            />
          </div>
          <div className="btns">
            <a className="btn" href="https://t.me/RedditOSOL" target="_blank">
              Telegram
            </a>

            <a
              className="btn"
              href="https://x.com/reddtonsolana"
              target="_blank"
            >
              X
            </a>

            <a className="btn" href="https://pump.fun/" target="_blank">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
