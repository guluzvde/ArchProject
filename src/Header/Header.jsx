import { faLocationPin,  faMessage, faPhone  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import './Header.css'


function Header() {
  return (
    <>
    <div className="group">
    <div className="contact">
      <div className="call">
        <FontAwesomeIcon icon={faPhone} />
        <a className='cont' href="+994519876543">+994 51 987 65 43</a>
      </div>
      <div className="message">
        <FontAwesomeIcon icon={faMessage} />
        <a className='cont' href="mailto: info@archbaku.az">info@archbaku.az</a>
      </div>
      <div className="location">
        <FontAwesomeIcon icon={faLocationPin} />
        <a className='cont' href="/">Bakı, Azərbaycan</a>
      </div>
      </div>
      <div className="social">
      <div className="ss facebook">
        <SocialIcon url="https://facebook.com/" style={{height:'25px'}}/>
      </div>
      <div className="ss instagram">
        <SocialIcon url="https://instagram.com/" style={{height:'25px'}}/>
      </div>
      <div className="ss linked-in">
        <SocialIcon url="https://linkedin.com/" style={{height:'25px'}}/>
      </div>
      <div className="ss whatsapp">
        <SocialIcon url="https://whatsapp.com/" style={{height:'25px'}} />
      </div>
      </div>
    </div>
      
    </>
  )
}

export default Header
