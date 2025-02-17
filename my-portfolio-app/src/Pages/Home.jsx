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
      <section className='features-container'>
        <img src='/features-image.png' alt="Features" className="features-image" />
        <div className='features-text'>
          <h2>We Provide Many <br /> Features You Can Use</h2>
          <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
          <ul className='features-list'>
            <li>Powerful online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN.</li>
            <li>No specific time limits.</li>
          </ul>
        </div>
      </section>
      <div className='text-container-prise'>
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
    </main>
  );
}

export default Home;
