import React, { useEffect } from 'react';
import valobg from '../gamecard/';

function ValorantGameCard() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const formData = JSON.parse(decodeURIComponent(urlParams.get('data')));

    // Update state with form data here
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  return (
    <div>
      <h2>LIFETIME STATS</h2>
      <video autoPlay muted loop id="video-background">
        <source src="/valomp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="formResults"></div>
    </div>
  );
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
        <source src="/valobg.mp4" type="video/mp4" />

        
      </video>
      </div>
}

export default ValorantGameCard;