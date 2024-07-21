import React, { useEffect, useState } from 'react';

const RotateMessage = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    isPortrait && window.innerWidth < 600 ? (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="text-center p-4 bg-white rounded-md shadow-lg">
          <p className="text-xl font-semibold text-gray-800">Please rotate your device to landscape mode for the best experience.</p>
        </div>
      </div>
    ) : null
  );
};

export default RotateMessage;
