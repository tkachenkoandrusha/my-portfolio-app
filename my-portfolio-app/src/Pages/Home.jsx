import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [selectedPlan, setSelectedPlan] = useState("Premium Plan");

  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
    },
    {
      name: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
    },
    {
      name: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
    },
  ];

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
      <div className="pricing-container">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${selectedPlan === plan.name ? "selected" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <div className="plan-icon"><img src='/box.png' alt='pricing' className='box-image'/></div>
            <h3>{plan.name}</h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}><img src='/indx.png' alt='indx' className='indx-image'/><span>{feature}</span></li>
              ))}
            </ul>
            <p className="price">{plan.price}</p>
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>
      <section className='vpn-section'>
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        <img src="/global.png" alt="glob" className="globalimage" />
      </section>
    </main>
  );
}

export default Home;
