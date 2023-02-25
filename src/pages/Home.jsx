import React,{useEffect, useState} from 'react'
import Works from './WorkPage';
import Socials from '../admin/Socials'; 
import Contact from './Contact';
import { Navbar,Footer } from '../components';
import About from './About';
import Intro from './Intro';

export default function Home() {
  
 
  return (
    <>
    
      <Navbar />
    <div className='p-10 sm:p-3 bg-slate-300 dark:bg-slate-700 dark:text-white'>
      <Intro/>
      {/* <About /> */}
      <Works />
      {/* <Socials/> */}
      <Contact />

    </div>
      <Footer/>
    </>
  )
}