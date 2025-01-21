import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <div className="footer-left">
          <img src={assets.logo} className='footer-logo' alt='footer logo'/>
          <p className='footer-details'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


          </p>
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
