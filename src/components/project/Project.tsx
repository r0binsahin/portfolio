import { NavigateFunction, useNavigate } from 'react-router';
import { IProject } from '../../models/IProject';
import './project.scss';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrevNextBtn from '../prevNextBtn/PrevNextBtn';

type NavigateFunctionType = (navigate: NavigateFunction) => void;

interface IProjectProps {
  projects: IProject[];
  projectId: number;
  navigateToPrev: NavigateFunctionType;
  navigateToNext: NavigateFunctionType;
}

const Project = ({
  projects,
  projectId,
  navigateToNext,
  navigateToPrev,
}: IProjectProps) => {
  const project = projects.find((project) => project.id === projectId);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigateToPrev(navigate);
  };

  const handleNextClick = () => {
    navigateToNext(navigate);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlhead = gsap.timeline();

    tlhead.from('.projectContainer__head--headImage', {
      duration: 2,
      x: 1000,
    });

    const tlWrapper = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__themeImage',
        start: () => 'top bottom+=400',
        end: () => 'top top+=200',
        scrub: 1,
      },
    });

    tlWrapper.to('.wrapper', {
      yPercent: -120,
      ease: Power1.easeInOut,
      y: 0,
      duration: 0.9,
    });

    const tlImgBox = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__themeImage',
        start: 'top center+=200',
        end: 'top top',
      },
    });

    tlImgBox.from('.projectContainer__themeImage--imgBox', {
      y: '40%',
      duration: 0.9,
      ease: Power1.easeInOut,
    });

    const tlTools = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__tools',
        start: 'top bottom',
        end: 'bottom center',
      },
    });

    tlTools.from('.projectContainer__tools--toolName', {
      x: '50%',
      duration: 0.9,
      ease: Power1.easeInOut,
    });

    const tlMidImg = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__midImageBox',
        start: 'top center',
        end: 'top top',
      },
    });

    tlMidImg.from('.projectContainer__midImageBox--midImage', {
      y: '40%',
      duration: 0.9,
      ease: Power1.easeInOut,
    });

    const tlLinks = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__linkBox',
        start: 'top bottom',
        end: 'bottom center',
      },
    });

    tlLinks.from('.projectContainer__linkBox--links', {
      x: '300%',
      duration: 0.9,
      ease: Power1.easeInOut,
    });

    const tlLongDesc = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectContainer__longDesc',
        start: 'top center',
        end: 'top top',
      },
    });

    tlLongDesc.from('.projectContainer__longDesc--descImage', {
      y: '50%',
      duration: 0.7,
      ease: Power1.easeInOut,
    });
  }, [projectId]);

  function italicizeInQuotes(text: string) {
    return text.replace(/"([^"]*)"/g, '<span class="italic">$1</span>');
  }

  return (
    <div className='projectContainer'>
      <div className='projectContainer__head'>
        <div className='projectContainer__head--info'>
          <div className='wrapper'>
            <p className='title'>{project?.title}</p>
            <p className='caption'>{project?.costumer}</p>
            <p className='date'>{project?.date}</p>
          </div>
        </div>
        <div className='projectContainer__head--headImage'>
          <img
            src={project?.img1}
            alt='first project image'
            loading='eager'
            fetchPriority='high'
          />
        </div>
      </div>
      <div className='projectContainer__themeImage'>
        <div className='projectContainer__themeImage--imgBox'>
          <img src={project?.imgExtra} alt='theme image' />
        </div>
        <div className='projectContainer__themeImage--desc'>
          <p
            dangerouslySetInnerHTML={{
              __html: italicizeInQuotes(project?.shortDesc || ''),
            }}
          ></p>
        </div>
      </div>
      <div className='projectContainer__tools'>
        <div className='projectContainer__tools--title'>
          <p>tools</p>
        </div>
        <div className='projectContainer__tools--toolName' data-speed='0.9'>
          {project?.tools.map((tool) => (
            <p>{tool} </p>
          ))}
        </div>
      </div>
      <div className='projectContainer__midImageBox'>
        <div className='projectContainer__midImageBox--midImage'>
          <img src={project?.img2} alt='second project image' />
        </div>
      </div>

      {project?.live !== '' || project?.github !== '' ? (
        <div className='projectContainer__linkBox'>
          <div className='projectContainer__linkBox--linkTitle'>
            <p>links</p>
          </div>
          <div className='projectContainer__linkBox--links'>
            {project?.github !== '' && (
              <a href={project?.github} target='_blank'>
                Github
              </a>
            )}
            {project?.live !== '' && (
              <a href={project?.live} target='_blank'>
                {' '}
                Live
              </a>
            )}
          </div>
        </div>
      ) : null}

      <div className='projectContainer__longDesc'>
        <div className='projectContainer__longDesc--text'>
          <p>{project?.longDesc}</p>
        </div>
        <div className='projectContainer__longDesc--descImage'>
          <img src={project?.img3} alt='third project image' />
        </div>
      </div>

      <PrevNextBtn
        projects={projects}
        projectId={projectId}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  );
};

export default Project;
