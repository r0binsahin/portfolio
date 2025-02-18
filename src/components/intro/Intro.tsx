import './intro.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import portrait from '../../assets/images//round.jpg';

const Intro = () => {
  useGSAP(() => {
    const tlIntro = gsap.timeline({});

    tlIntro.from('.firstname', { duration: 2, x: 1600 });
    tlIntro.from('.wrapper__portrait', { duration: 1.5, y: -500 });
  }, []);
  return (
    <div className='wrapper'>
      <div className='wrapper__portrait'>
        <img src={portrait} alt='portrait of Robin Sahin' />
      </div>
      <div className='wrapper__titles'>
        <h3 className='developer'>Developer</h3>
        <h1 className='firstname'>Robin</h1>
      </div>
    </div>
  );
};

export default Intro;
