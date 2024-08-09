import './about.scss';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { education, experience } from '../../assets/data/resume';

const About = () => {
  useGSAP(() => {
    const tlLoad = gsap.timeline();

    tlLoad.from('.about', {
      duration: 1,
      x: 500,
    });

    const tlImgBox = gsap.timeline({
      scrollTrigger: {
        trigger: '.mail',
        start: 'top center+=200',
        end: 'top top',
      },
    });

    tlImgBox.from('.photo', {
      y: '50%',
      duration: 0.9,
      ease: Power1.easeInOut,
    });
  });

  return (
    <div className='about'>
      <div className='headBox'>
        <p>Enthusiastic about technology and driven by curiosity.</p>
      </div>
      <div className='specialties'>
        <p className='title'>specialties</p>
        <div>
          <p className='specs'> frontend </p>
          <p className='specs'> backend</p>
          <p className='specs'> react.js </p>
          <p className='specs'> next.js </p>
          <p className='specs'> typescript </p>
        </div>
      </div>

      <div className='card'>
        <div className='info'>
          <div className='name'>
            <p className='fullname'>robin sahin</p>
            <p>Full Stack Developer</p>
          </div>
          <div className='contacts'>
            <p className='city'>Stockholm</p>
            <p className='mail'>robinsahin@outlook.com</p>
          </div>
        </div>
        <div className='photo'>
          <img
            className='portrait'
            src='https://i.postimg.cc/sfnk427k/Square-1.png'
            alt='portrait'
          />
        </div>
      </div>

      <div className='resume'>
        <div className='shortDescription'>
          <h3>About me</h3>
          <p>
            A passionate developer driven by the infinite potential of
            programming and constantly exploring.
          </p>
          <p>
            With a diverse background spanning journalism, education, and
            linguistic studies, I bring a unique perspective to my development
            journey.
          </p>
          <p>
            From reporting for Sveriges Radio to teaching languages, my
            experiences have cultivated adaptability and a strong work ethic.
          </p>
          <p>
            Having completed a rigorous two-year education in Frontend
            Development at Medieinstitutet and a 3 months intensive Full Stack
            Bootcamp at Salt, I've honed my skills in JavaScript/TypeScript, its
            framework React, and API development.
          </p>
          <p>
            With a Master's degree in linguistics and literature I bring a
            multifaceted approach to problem-solving and communication.
          </p>
          <p>
            Passionate about collaborative work and continual learning, I
            embrace challenges with enthusiasm and dedication.{' '}
          </p>
          <p>
            As I continue to evolve in the dynamic realm of frontend
            development, I'm eager to contribute my diverse skill set and drive
            for excellence to impactful projects.
          </p>
        </div>
      </div>
      <div className='funFact'>
        <h3>Fun facts</h3>

        <p>
          There is no houseplant that I couldn't propagate through cuttings.{' '}
          <span>🌱</span>
        </p>
        <p>
          Currently, in my spare time, enjoying translating a novel from Swedish
          into Kurdish. <span>📚</span>
        </p>
      </div>
      <div className='cv'>
        <div className='education'>
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div className='edu' key={index}>
              <div>
                <p className='program'>{edu.education}</p>
              </div>
              <div>
                <p className='school'>{edu.school}</p>
              </div>
              <div>
                <p className='eduDate'>{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='experience'>
          <h3>Experience</h3>

          {experience.map((exp, index) => (
            <div className='exp' key={index}>
              <div>
                <p className='job'>{exp.job}</p>
              </div>
              <div>
                <p className='employer'>{exp.employeer}</p>
              </div>

              <div>
                <p className='empDate'>{exp.employmentDate}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='lang'>
          <h3>Languages</h3>
          <p> Swedish, English, Kurdish, Turkish, Italian</p>
        </div>
      </div>
    </div>
  );
};

export default About;
