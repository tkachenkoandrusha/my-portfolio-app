import React, { useState } from 'react';
import '../styles/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const reviews = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      review: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      review: "I like it because I like to travel far and still can connect with high speed.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      review: "This is very unusual for my business that currently requires a virtual private network that has high security.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const TestimonialCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2, // Показує 2 відгуки одночасно
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <div className="max-w-5xl mx-auto py-10">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="border rounded-xl p-5 shadow-md bg-white text-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-500">{review.location}</p>
                <p className="text-yellow-500 text-xl">⭐ {review.rating}</p>
                <p className="mt-3 text-gray-700">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

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

      <div className="brand-logos">
        <img src="/netflix.png" alt="Netflix" className="logobr" />
        <img src="/reddit.png" alt="Reddit" className="logobr" />
        <img src="/amazon.png" alt="Amazon" className="logobr" />
        <img src="/discord.png" alt="Discord" className="logobr" />
        <img src="/spotify.png" alt="Spotify" className="logobr" />
      </div>

      <div className='customer'>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>

      {/* Використовуємо компонент TestimonialCarousel */}
      <TestimonialCarousel />
    </main>
  );
}

export default Home;
