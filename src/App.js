import React, { useState } from 'react';
import './App.css';

const cuteMessages = [
  "Hey there! 🐻",
  "I might have made a tiny mistake...",
  "But I promise it wasn't on purpose! 🥺",
  "Will you forgive me? 💖"
];

const noMessages = [
  "Are you sure? Pretty please? 🥺👉👈",
  "What if I give you a virtual hug? 🤗",
  "I'll be extra cute! 🐾",
  "Forgive me? Pleeease? 🥹",
  "I can do a happy dance! 💃",
  "Look, puppy eyes! 🐶",
  "I'll bring you cookies! 🍪",
  "Still no? Oh no... 😢",
  "I won't give up! Forgive me? 🙏",
  "I'll try harder! 💪",
  "What if I say sorry in a song? 🎶",
  "I drew you a heart! ❤️",
  "Please? Pretty please? 🥰",
  "I can be your best friend! 🐻",
  "I made a card! 💌",
  "I can tell a joke! Why did the bear say sorry? Because it made a 'paws' in your day! 🐾",
  "Still no? My heart is melting... 🫠",
  "I'll wait as long as it takes! ⏳",
  "Forgive me, please? 🌸",
  "I brought flowers! 🌷",
  "I can do a silly face! 😜",
  "I wrote a poem! Roses are red, violets are blue, I'm so sorry, please forgive me too! 🌹",
  "I can be extra cute! 🥹",
  "Last chance... Will you forgive me? 🥲"
];

function App() {
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const [noGone, setNoGone] = useState(false);

  const handleYes = () => {
    setForgiven(true);
  };

  const handleNo = () => {
    if (noCount + 1 >= 25) {
      setNoGone(true);
    }
    setNoCount(noCount + 1);
  };

  // Helper to detect mobile
  const isMobile = window.innerWidth <= 600;

  return (
    <div className="cute-bg">
      <h1 className="apology-heading"> माफ़ कर दो ना? 🙏</h1>
      <div className="apology-card">
        {!forgiven ? (
          <>
            <div className="cute-message">
              {noCount === 0
                ? cuteMessages.map((msg, i) => (
                    <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.7}s` }}>{msg}</div>
                  ))
                : <div className="fade-in" key={noCount}>{noMessages[Math.min(noCount-1, noMessages.length-1)]}</div>
              }
            </div>
            <div className="button-row">
              <div className="button-center-container">
                <button
                  className="yes-btn"
                  style={{
                    transform: isMobile
                      ? `scale(${Math.min(1 + noCount * 0.05, 1.18)})`
                      : `scale(${1 + noCount * 0.08})`,
                    zIndex: 2 + noCount,
                    marginBottom: isMobile ? '0.5rem' : 0,
                    maxWidth: isMobile ? '240px' : undefined,
                    width: isMobile ? '100%' : undefined
                  }}
                  onClick={handleYes}
                >
                  Yes 💖
                </button>
              </div>
              {!noGone && (
                <div className="button-center-container">
                  <button
                    className="no-btn"
                    style={{
                      opacity: 1 - noCount / 25,
                      pointerEvents: noGone ? 'none' : 'auto',
                      marginLeft: isMobile ? 0 : '2rem',
                      marginTop: isMobile ? '0.5rem' : 0,
                      transform: isMobile
                        ? `scale(${Math.max(1 - noCount * 0.025, 0.7)})`
                        : `scale(${Math.max(1 - noCount * 0.03, 0.4)})`,
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                      maxWidth: isMobile ? '240px' : undefined,
                      width: isMobile ? '100%' : undefined
                    }}
                    onClick={handleNo}
                  >
                    No 😢
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="thank-you">
            <div>Yay! Thank you for forgiving me! 🥰</div>
            <div>You have the kindest heart. 💖</div>
            <div>Sending you all the hugs and smiles! 🤗😊</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
