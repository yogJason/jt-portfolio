import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import Card from './Card';

const About = () => {
  const aboutRef = useScrollReveal('fade-up', 200);

  return (
    <Card 
      title="About Me"
      cardRef={aboutRef}
      id="about"
    >
      <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
        Versatile software engineer driven by curiosity and a passion for tackling complex 
        problems — known for delivering high-quality solutions that earn trust across 
        engineering and leadership.
        <br /> 
        I contribute as both a team player and leader, earning the trust of my managers and 
        peers through proven capabilities and a resilient mindset. 
        <br/>
        I continuously grow professionally as a software engineer, and enjoy mentoring junior engineers.
      </p>
    </Card>
  );
};

export default About;