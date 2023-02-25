import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul className=' justify-center p-4 bg-gray-300 flex flex-wrap gap-6 sm:gap-1 md:gap-2 m-auto'>
            

            <Link to=''>
                <li>Intro</li>
            </Link>
            <Link to='about'>
                <li>About</li>
            </Link>
            <Link to=''>
                <li>Education</li>
            </Link>
            <Link to='work'>
                <li>Work</li>
            </Link>
            <Link to=''>
                <li>Contact</li>
            </Link>
            <Link to=''>
                <li>Socials</li>
            </Link>
            {/* <li>Intro</li>
            <li>About</li>
            <li>Education</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Socials</li> */}
            
            
        </ul>
        
    </div>
  )
}
