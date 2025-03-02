import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">
          <img src="logo.png" alt="Logo" />
          <strong>LaslesVPN</strong>
        </div>
        <p>LaslesVPN is a private virtual network that has unique features and high security.</p>
        <div className="social-icons">
          <a href="facebook"><img src="/facebook.png" alt="faceboo"/></a>
          <a href="tviter"><img src="/tviter.png" alt="tvi"/></a>
          <a href="instagram"><img src="/intagram.png" alt="insta"/></a>
        </div>
        <p>&copy; 2020 LaslesVPN</p>
      </div>
      <div className="footer-column">
        <h3>Product</h3>
        <ul>
          <li><a href="dovn">Download</a></li>
          <li><a href="pric">Pricing</a></li>
          <li><a href="loc">Locations</a></li>
          <li><a href="serv">Server</a></li>
          <li><a href="coun">Countries</a></li>
          <li><a href="blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Engage</h3>
        <ul>
          <li><a href="las">LaslesVPN?</a></li>
          <li><a href="faq">FAQ</a></li>
          <li><a href="tutor">Tutorials</a></li>
          <li><a href="#aboutas">About Us</a></li>
          <li><a href="policy">Privacy Policy</a></li>
          <li><a href="service">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Earn Money</h3>
        <ul>
          <li><a href="affilia">Affiliate</a></li>
          <li><a href="partner">Become Partner</a></li>
          <li><a href='https://github.com/tkachenkoandrusha/my-portfolio-app/tree/main/my-portfolio-app' class="highlighted" target="_blank" rel="noreferrer" >Tkachenko Andriy</a></li>
          <li><a href='https://www.figma.com/design/YuKAeB7QJ8zvv6ISYSqTxs/FREEBIES-Landingpage-LaslesVPN-(Community)?node-id=1-2&t=wBulT2WTaNERSztY-0' class="highlighted" target="_blank" rel="noreferrer">Original design</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
