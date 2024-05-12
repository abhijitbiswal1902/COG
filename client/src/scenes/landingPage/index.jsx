import React from 'react';
import landingpagebg from '../landingPage/';
function LandingPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: '50%',
          height: 'auto',
          zIndex: -1,
        }}
      >
        <source src="/landingpagebg.mp4" type="video/mp4" />

        
      </video>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <a
            href="/login"
            className="button"
            style={{
              padding: '30px 50px',
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
              border: 'none',
              borderRadius: '10px',
              margin: '15px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Login
          </a>
          <a
            href="/login"
            className="button"
            style={{
              padding: '30px 50px',
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
              border: 'none',
              borderRadius: '10px',
              margin: '15px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
