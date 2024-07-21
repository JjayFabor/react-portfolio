import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Experience = () => {
  return (
    <div className='content'>
      {/* <h1 className='content-title'>Experience</h1> */}
      <div className='flex justify-center items-center mt-52 font-dinasti-bold text-9xl'>
        <TypeAnimation
          sequence={[
            'NO EXPERIENCE🥲',
            1000,          
            '',              
            1000              
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Experience;
