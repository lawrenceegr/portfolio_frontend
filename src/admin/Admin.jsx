
import React, { useState, useEffect } from "react";
import { Outlet, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar'


const Admin = ({ ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
      {
        isAuthenticated ? (
          <div className="text-center justify-center"><h3 className="bg-green-600  p-2 text-white font-bold">Welcome Back!</h3> <Navbar /><Outlet /></div>
          
        ) : (
          <Navigate to="/login" />
        )
      }
    </div>
  );
};

export default Admin;
