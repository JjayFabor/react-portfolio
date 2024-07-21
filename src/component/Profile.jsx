import 'boxicons';
import React from 'react';
import MotionButton from './buttons/MotionButton';
import SkillsLogo from './skillsLogo/skillsLogo';

const Profile = () => {
  const handleDownload = () => {
    window.open('src/assets/FaborSWEResume.pdf', '_blank');
  }

  return (
    <div className="card-wrapper h-full w-full mr-10 overflow-auto">
      <div className="card-content flex flex-col items-center min-h-screen">
        <div className="mt-6 rounded-full overflow-hidden animate-bounce drop-shadow-custom-3xl">
          <img 
            src="./src/assets/img.png" 
            alt="Profile" 
            className="lg:w-[243px] lg:h-[273px] sm:h-[103px]"
          />
        </div>
        <h1 className="lg:text-4xl font-dinasti-bold font-bold text-center mb-1 mt-6">Jaylord Vhan Fabor</h1>
        <h2 className="lg:text-2xl font-semibold font-dinasti-regular text-gray-300 text-center mb-4">Software Engineer</h2>
        <div className="contact-info flex justify-center space-x-6">
          <a href="mailto:faborjaylordvhan@gmail.com" className="text-blue-500">
            <box-icon name='envelope' color='white' size='md'></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/jjayfabor/" target="_blank" className="text-blue-500">
            <box-icon type='logo' name='linkedin-square' color='white' size='md'></box-icon>
          </a>
          <a href="https://github.com/JjayFabor" target="_blank" className="text-blue-500">
            <box-icon type='logo' name='github' color='white' size='md'></box-icon>
          </a>
        </div>
        <SkillsLogo/>
        <div className='mt-2'>
          <MotionButton click={handleDownload} buttonText='Download CV'/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
