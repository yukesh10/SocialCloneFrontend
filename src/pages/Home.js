import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token){
      const decodedToken = jwt_decode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()){
        navigate('/login', {state: {message: "User Logged Out"}});
      } 
    } else {
      navigate('/login', {state: {message: "User Not Logged In"}});
    }
  }, [navigate])

  return (
    <>
      <Header />
    </>
  )
}

export default Home