import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='contact'>
        <div className='contact__links'>
          <Link to={'/contact'} className='contact__links--link'>
            <p>contact </p>
          </Link>

          <a
            href='https://www.linkedin.com/in/robin-sahin-15404a24b/'
            className='contact__links--link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>linkedin</p>
          </a>

          <a
            href='https://github.com/r0binsahin'
            className='contact__links--link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>github</p>
          </a>
        </div>
        <div className='contact__copy'>
          <p>&copy; 2024</p>
        </div>
      </div>
      <div className='fullName'>
        <span>Developed by</span>
        <p>robin sahin</p>
      </div>
    </div>
  );
};

export default Footer;
