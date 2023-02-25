import React, { useState, useEffect } from 'react';
import { WorkCard } from '../components';
const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // fetch the works data from the API
    fetch('http://localhost:4000/work')
      .then(res => res.json())
      .then(data => setWorks(data));
  }, []);

  return (
   <>
   <h3 className='text-4xl text-center text-orange-500 font-bold pl-6 my-8'>Works And contracts</h3>
    <div className=' flex
    '>
      {works.map(work => (
        
        <div key={work._id} className=''>
           <WorkCard 
          title={work.title}
          image={work.image} 
          description={work.description}
          />
        </div>
      ))}
     
    </div>
      </>
  );
};

export default Works;
