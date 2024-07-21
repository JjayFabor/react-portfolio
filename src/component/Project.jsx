import React from 'react';
import MotionButton from './buttons/MotionButton';

const Projects = () => {
  const projectData = [
    { title: 'Lettuce Watch', imageUrl: './src/assets/projects/project-1.png', description: "A real-time monitoring system for lettuce farms.", githubUrl: 'https://github.com/JjayFabor/LettuceRealTimeMonitoringSystem' },
    { title: 'BridgeAI', imageUrl: 'src/assets/projects/project-2.png', description: "An educational platform for personalized learning.", githubUrl: 'https://github.com/JjayFabor/bridgeAI' },
    { title: 'Gcash Inventory', imageUrl: 'src/assets/projects/project-3.png', description: "An inventory for Gcash E-Wallet Store.", githubUrl: 'https://github.com/JjayFabor/GcashInventory' },
  ];

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const handleDownload = () => {
    window.open('src/assets/FaborSWEResume.pdf', '_blank');
  }

  return (
    <div className='content items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-3 pl-6 w-[75%]'>
        {projectData.map((project, index) => (
          <div key={index} className='w-full group perspective rounded-lg overflow-hidden h-64 drop-shadow-white-4xl'>
            <div className='relative w-full h-full preserve-3d flip-card'>
              <div className='absolute inset-0 backface-hidden'>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className='w-full h-full object-cover rounded-xl' 
                />
              </div>
              <div className='absolute flex flex-col inset-0 bg-black text-white items-center p-4 backface-hidden rounded-lg bg-opacity-20 drop-shadow-3xl' style={{ transform: 'rotateY(180deg)' }}>
                <h4 className='text-xl font-dinasti-bold pb-6'>{project.title}</h4>
                <p className='pb-10'>{project.description}</p>
                <MotionButton click={() => handleRedirect(project.githubUrl)} buttonText='View on Github'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;