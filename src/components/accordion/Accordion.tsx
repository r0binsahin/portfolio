import './accordion.scss';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);

import { projects } from '../../assets/data/projects';
import { Link } from 'react-router-dom';

const Accordion = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projectElements = gsap.utils.toArray('.project') as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: () => 'botto bottom',
        end: () => '+=' + (projectElements.length + 1) * window.innerHeight,
        scrub: 0.8,
        pin: true,
        preventOverlaps: true,
      },
    });

    projectElements.forEach((project) => {
      tl.to(project, {
        yPercent: -100,
        ease: 'none',
        stagger: 0.4,
      });
    });

    gsap.set('.project ', {
      zIndex: (i, _target, targets) => targets.length + i,
    });
  }, []);

  return (
    <>
      <ul className='container'>
        {projects.map((project, index) => (
          <li className='project' key={index}>
            <div className='projectInner'>
              <Link to={`/projects/${project.id}`} className='link'>
                <div className='projectInner__header'>
                  <p className='projectInner__header--costumer'>
                    {project.costumer}
                  </p>
                  <p className='projectInner__header--name'>{project.title}</p>
                  <p className='projectInner__header--more'>see more - &gt;</p>
                </div>
              </Link>

              <div className='projectInner__image'>
                <Link to={`/projects/${project.id}`} className='link'>
                  <img
                    className='projectInner__image--img'
                    src={project.coverImg}
                    alt='project cover image'
                  />{' '}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Accordion;
