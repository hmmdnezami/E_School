import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <a href="https://www.facebook.com/schoolname" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-logo.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/schoolname" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-logo.png" alt="Instagram" />
            </a>
          </div>
          <div className="contact-details">
            <p>Phone: 123-456-7890</p>
            <p>Email: info@schoolname.com</p>
          </div>
        </div>

        <style jsx>{`
          footer {
            background-color: black ; 
            padding: 20px;
            widht : 100%
          }

          .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .social-links img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }

          .contact-details p {
            margin: 5px 0;
            color : white;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
