import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Project';

const MainContent = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active-link animate-blink' : 'text-gray-300 hover:text-white';
  };

  return (
    <div className='card-wrapper h-full w-full mx-5'>
      <div className='card-content flex'>
        <nav className="justify-between bg-slate-500 w-full p-5 mb-6">
          <ul className="flex justify-center space-x-6 font-dinasti-regular text-4xl ml-auto">
            <li className={getActiveClass('/')}><Link to="/">About</Link></li>
            <li className={getActiveClass('/experience')}><Link to="/experience">Experience</Link></li>
            <li className={getActiveClass('/projects')}><Link to="/projects">Projects</Link></li>
            <li className={getActiveClass('/contact')}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className='absolute w-[calc(100%-2px)] h-[calc(100%-67px)] bg-gradient-to-b top-[20px] left-[1px] from-slate-900 to-slate-500 mt-[45px]'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
