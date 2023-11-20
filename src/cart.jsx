import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profilePhoto from './assets/bg-site.jpg';
import profilePhoto1 from './assets/bg-site1.jpg';
import profilePhoto2 from './assets/bg-site2.jpg';

function ProfileCard() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="content">
          <h2 className="profile-name">vadoo</h2>
          <p className="job-title">Frontend Developer</p>
          <p className="description">In the realm of ideals, Frontend serves as a gateway bridging the user interface to the deeper server-side layer.</p>
        </div>
        <div className="social-links">
          <a className="instagram" href="https://instagram.com/-javadhasani">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/javad-hasani/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="twitter" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="card">
        <div className="image-container">
          <img src={profilePhoto1} alt="Profile Photo" />
        </div>
        <div className="content">
          <h2 className="profile-name">vadoo</h2>
          <p className="job-title">Frontend Developer</p>
          <p className="description">In the realm of ideals, Frontend serves as a gateway bridging the user interface to the deeper server-side layer.</p>
        </div>
        <div className="social-links">
          <a className="instagram" href="https://instagram.com/-javadhasani">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/javad-hasani/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="twitter" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="card">
        <div className="image-container">
          <img src={profilePhoto2} alt="Profile Photo" />
        </div>
        <div className="content">
          <h2 className="profile-name">vadoo</h2>
          <p className="job-title">Frontend Developer</p>
          <p className="description">In the realm of ideals, Frontend serves as a gateway bridging the user interface to the deeper server-side layer.</p>
        </div>
        <div className="social-links">
          <a className="instagram" href="https://instagram.com/-javadhasani">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/javad-hasani/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="twitter" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
