import React from 'react';

const MaintenanceMessage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-center p-4 bg-white rounded-md shadow-lg">
        <p className="text-xl font-semibold text-gray-800">Portfolio is on Maintenance for Viewing on Small Devices</p>
      </div>
    </div>
  );
};

export default MaintenanceMessage;
