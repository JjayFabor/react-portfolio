import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './component/MainContent';
import MaintenanceMessage from './component/MaintenanceMessage';
import Profile from './component/Profile';

const App = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {isSmallDevice ? (
        <MaintenanceMessage/>
      ) : (
        <div className='flex h-[100vh] w-[100%] px-10 py-5 bg-stone-800 text-white overflow-auto'>
          <div className='w-1/4 h-[95vh]'>
            <Profile /> 
          </div>
          <div className='w-3/4 h-[95vh]'>
            <MainContent />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
