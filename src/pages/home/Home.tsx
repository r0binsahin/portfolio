import Accordion from '../../components/accordion/Accordion';
import Intro from '../../components/intro/Intro';

import ProjectTitle from '../../components/projectTitle/ProjectTitle';
import Skills from '../../components/skills/Skills';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: '.projectInner__header',
        start: 'top top-=25%',
        end: 'bottom bottom',
        onEnter: () => gsap.to('.navbar', { y: '-100%', duration: 0.5 }),
        onLeaveBack: () => gsap.to('.navbar', { y: '0%', duration: 0.5 }),
        pin: true,
        preventOverlaps: true,
      },
    });
  }, []);
  return (
    <>
      <Intro />
      <div style={{ paddingTop: '150px' }}>
        <Skills />
      </div>
      <ProjectTitle />
      <Accordion />
      <div
        style={{ width: '100%', height: '450px', background: '#ffb800' }}
      ></div>
    </>
  );
};

export default Home;
