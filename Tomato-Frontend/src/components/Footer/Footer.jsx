import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <div className="footer-left">
          <img src={assets.logo} className='footer-logo' alt='footer logo'/>
          <p className='footer-details'>
          At Tomato, we bring a world of flavors to your table. From savory Italian pastas to spicy Asian delicacies and hearty American classics, our diverse menu caters to every palate. Fresh ingredients, bold flavors, and exceptional service are at the heart of everything we do. Visit us to experience a culinary journey like no other—because at Tomato, every meal is a celebration of taste!</p>
          <div className="footer-left-social">
            <img className='social-media-icon' src={assets.facebook_icon} alt="facebook icon"/>
            <img className='social-media-icon' src={assets.twitter_icon} alt="twitter icon" />
            <img className='social-media-icon' src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>

        <div className="footer-center">
          <h2>CODEAVOR</h2>
          <ul className='company-list'>
            <li className='company-item'>Home</li>
            <li className='company-item'>About us</li>
            <li className='company-item'>Delivery</li>
            <li className='company-item'>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Get in Touch</h2>
          <ul className='footer-right-list'>
            <li>+1-212-456-7890</li>
            <li>mngautriz@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright 2024 © Codeavor.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
