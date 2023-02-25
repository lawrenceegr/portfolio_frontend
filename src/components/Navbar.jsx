import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul className=' justify-center p-4 bg-gray-300 flex flex-wrap gap-6 sm:gap-1 md:gap-2 m-auto'>
            

            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to=''>
                <li>About</li>
            </Link>
            <Link to=''>
                <li>Education</li>
            </Link>
            <Link to=''>
                <li>Work</li>
            </Link>
            <Link to=''>
                <li>Contact</li>
            </Link>
            <Link to=''>
                <li>Socials</li>
            </Link>
          
            
        </ul>
        
    </div>
  )
}
