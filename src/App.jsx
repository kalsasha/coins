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
          <h1 className="title">Donald`s Little Trip</h1>
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
              href="https://t.me/donaldslittletrip"
              target="_blank"
            >
              Telegram
            </a>

            <a
              className="btn"
              href="https://x.com/dnldslttltrip"
              target="_blank"
            >
              X
            </a>

            <a
              className="btn"
              href="https://pump.fun/https://pump.fun/2ec1JLE5irxee1kyd41ozgv8JDyABRpaQGP5oxYXftfW"
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
