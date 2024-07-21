import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './component/MainContent';
import Profile from './component/Profile';
import RotateMessage from './component/RotateMessage.jsx';


const App = () => {
  return (
    <Router>
      <RotateMessage/>
      <div className='flex h-[100vh] w-[100%] px-10 py-5 bg-stone-800 text-white overflow-auto'>
        <div className='w-1/4 h-[95vh]'>
          <Profile /> 
        </div>
        <div className='w-3/4 h-[95vh]'>
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;