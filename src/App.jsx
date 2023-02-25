import React from 'react'
import { Router ,Routes, Route,useLocation } from 'react-router-dom'
import './App.css'
import { Home } from './pages'
import { Admin,Work,Navbar , Login,About} from './admin'
import ModalProvider from './components/modals/ModalProvider'
function App() {
  
 const location = useLocation()
  return (
    <div className='App text-center sm:p-4'>
        <ModalProvider>

       
      <Routes>
          <Route path="/admin" element={<Admin/>} >
            <Route path={''} element={<div>Welcome Back</div>}/>
            <Route path='work' element={<Work/>}/>
            <Route path='about' element={<About/>}/>

          </Route>
          <Route path="*" element={<h2 className='text-center text-3xl my-[20%]   '>SORRY THE PAGE YOU ARE LOOKING FOR CANNOT BE FOUND!</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<Login />} />
        </Routes>
    </ModalProvider>
    </div>
     
 
  )
}

export default App
