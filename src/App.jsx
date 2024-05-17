import './App.css'; // Стилі можна додати

import { useState } from 'react';

function LandingPage() {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated); // Зміна стану обертання при кожному кліку
  };
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <div className="header">
          <h1 className="title">Pissin Frenchy</h1>
        </div>
        <div className="coin">
          <div className="img">
            <img
              className={isRotated ? 'rotate-on-click' : ''}
              onClick={handleClick}
              src="/1.jpg"
              alt="Опис зображення"
            />
          </div>
          <div className="btns">
            <div className="btn">
              <a href="https://t.me/pssnfrenchy" target="_blank">
                Telegram
              </a>
            </div>
            <div className="btn">
              <a href="https://x.com/pissinfrenchy" target="_blank">
                X
              </a>
            </div>

            <div className="btn">
              <a href="pissinfrenchy.fun" target="_blank">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
