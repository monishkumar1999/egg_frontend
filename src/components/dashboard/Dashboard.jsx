import { Button } from '@mui/material';
import React from 'react';
import Cards from './Card';

function Dashboard() {
  return (
    <>

    <div className='m-5'>
        {/* First Section - Grid layout for 3 boxes */}
        <div className='grid  sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Cards />
      </div>
      {/* New Section - Full Row Section */}
      <div className="w-full shadow-2xl  rounded-lg mt-6 h-36">d
      </div>
    </div>
    
    </>
  );
}

export default Dashboard;
