import React, { useState } from 'react'
import api from '../api';

export default function Login() {
    const[password,setPassword]= useState('');
    const [email,setEmail] = useState('');
    const[message, setMessage] = useState('')
    const[alert, setAlert] = useState()
    const[success , setSuccess] = useState()

   const handleLogin = async (e)=>{
      e.preventDefault();
      const User = {password,email};
      try {
        await api.post("/authentication/login",User);
        window.localStorage.setItem('token').then(()=>setMessage("login successful"))
        setSuccess(true)
        // window.location.href="/admin"

      } catch (error) {

        setMessage(error.message);

      }
      setAlert(alert=>!alert)
   }

  return (
    <div className=" text-center p-10 sm:p-3  min-h-screen overflow-hidden">
    <div className="  flex flex-col p-4  m-auto justify-center max-w-[400px] bg-white rounded-md shadow-xl shadow-rose-600/40  ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black underline uppercase decoration-wavy">
           Sign in
        </h1>
        {alert && <h1 className={`mt-5 py-2 text-black ${success? "bg-green-500":"bg-red-400"}  rounded-xl`}>{!success? '*' : ''}{message}</h1>}
        <form className="mt-6"  >
            <div className="mb-2 text-start ">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                
                />
            </div>
            <div className="mb-2 text-start">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <a
                href="#"
                className="text-xs text-purple-600 hover:underline"
            >
                Forgot Password?
            </a>
            <div className="mt-6">
                <button 
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={(e)=>{handleLogin(e)}}
                >
                    Login
                </button>
            </div>
        </form>

        
    </div>
 </div>
  )
}
