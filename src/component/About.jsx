import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const About = () => {
  
  const [text] = useTypewriter({
    words: ['Backend Developer', 'Software Developer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <div className='content'>
      <div className='about mb-5'>
        <h5 className='text-1xl font-semi-bold'>Hello, It's Me</h5>
        <h1 className='text-9xl font-dinasti-bold'>Jjay</h1>

        <span className='font-extrabold font-dinasti-regular text-7xl'>
          <h1>
            I'm a&nbsp;
            <span style={{ color: '#00CED1'}}>
              {text}
            </span>
            <Cursor cursorStyle='>' />
          </h1>
        </span>
        <span className='pt-3 font-extralight text-xl'>
          <p>
            an aspiring software engineer with a passion for coding and innovation. <br /> 
            Currently, I'm focusing on backend development and preparing for my OJT next year. <br /> 
            My mission is to create impactful software solutions.
          </p>
        </span>
      </div>

      <hr /> 

      <div className="goals">
        <h2 className='content-title'>Goals</h2>
        <p className='goals-content font-extralight text-xl'>
          I am actively seeking internship, part-time, or contractual opportunities to gain real-world experience and contribute to meaningful projects. I am eager to apply my skills, learn from industry professionals, and continue growing as a software engineer.
        </p>
      </div>

      <hr />  

      <div className="personal-life">
        <h2 className='content-title'>Personal Life</h2>
        <p className='personal-life-content font-extralight text-xl'>
          Outside of coding, I am committed to maintaining a balanced lifestyle. I enjoy working out regularly, ensuring I stay healthy and energized. Sundays are my rest days, allowing me to recharge and spend quality time with family and friends.
        </p>
      </div>
    </div>
  );
}

export default About;


          {/* <TypeAnimation
            sequence={[
              "I'm a Backend Developer",
              1000,
              "I'm a Software Developer",
              1000,
              "I'm an Aspiring Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          /> */}