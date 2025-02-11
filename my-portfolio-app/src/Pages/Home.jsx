import React from 'react';
import '../styles/Home.css'; 

function Home() {
  return (
    <main>
      <div className="text-container">
        <h2>Want anything to be easy with LaslesVPN.</h2>
        <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <button className="get-started">Get Started</button>
      </div>
      <img src="/h1.png" alt="h1" className="image-first-page" />
    </main>
  );
}

export default Home;