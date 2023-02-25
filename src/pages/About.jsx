import React, { useEffect, useState } from 'react'
import api from '../api'
export default function About() {
  const [about, setAbout]= useState({})
  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    try {
      const res= await api.get("/about");
      setAbout(res.data);
      console.log(res.data)
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='my-10 text-start'>
    {about.map((data)=>
      {
        return(

          
          
          <div> <p className="text-4xl text-center font-sans font-bold mb-3 text-orange-500 pl-6 ">{data.title}</p>
        <p> {data.description}</p></div>
          )
         }
        
      )}
     
   </div>
  )
}
