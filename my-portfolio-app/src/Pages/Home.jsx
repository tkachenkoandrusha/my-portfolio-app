import React from 'react';
import '../styles/Home.css'; 

function Home() {
  return (
    <main className="home-container">
      <div className="content">
        <div className="text-container">
          <h2>Want anything to be easy with LaslesVPN.</h2>
          <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <button className="get-started">Get Started</button>
        </div>
        <img src="/h1.png" alt="h1" className="image-first-page" />
      </div>
      <div className="stats">
        <div className="stat">
          <div className="icon"><img src="/user-icon.png" alt="Users" /></div>
          <h3>90+</h3>
          <p>Users</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <div className="icon"><img src="/location-icon.png" alt="Locations" /></div>
          <h3>30+</h3>
          <p>Locations</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <div className="icon"><img src="/server-icon.png" alt="Server" /></div>
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
