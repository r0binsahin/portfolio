import './footer.scss';

interface IFooterProps {
  scrollToTop: () => void;
}

const Footer = ({ scrollToTop }: IFooterProps) => {
  return (
    <div className='footerWrapper'>
      <div className='info'>
        <div className='info__contact'>
          <div className='info__contact--email'>
            <p className='title'>say hello</p>
            <p className='mail'>robinsahin@outlook.com</p>
          </div>
          <div className='info__contact--connect'>
            <p>Connect</p>
            <a
              href='https://www.linkedin.com/in/robin-sahin-15404a24b/'
              target='_blank'
              rel='noopener noreferrer'
            >
              www.linkedin.com/robinsahin
            </a>
          </div>

          <div className='info__contact--github'>
            <p>Github</p>
            <a
              href='https://github.com/r0binsahin'
              target='_blank'
              rel='noopener noreferrer'
            >
              www.github.com/r0binsahin
            </a>
          </div>
        </div>
        <div className='info__aboutSite'>
          <span>website</span>
          <p>Developed by Robin Sahin </p>
          <p>
            Composed by
            <a
              href='https://www.linkedin.com/in/hiertonn/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Maria Hiertonn
            </a>
          </p>

          <p className='copy'>&copy; 2024</p>
        </div>
      </div>
      <div className='fullName'>
        <p onClick={scrollToTop}>Robin Sahin</p>
      </div>
    </div>
  );
};

export default Footer;
