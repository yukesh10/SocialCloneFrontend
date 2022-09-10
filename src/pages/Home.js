import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import Header from '../components/Header';
import Createpost from '../components/Createpost';
import Postview from '../components/Postview';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get(`http://localhost:5001/post/getAll`)
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token){
      const decodedToken = jwt_decode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()){
        navigate('/login', {state: {message: "User Logged Out"}});
      } 

      getPosts();

    } else {
      navigate('/login', {state: {message: "User Not Logged In"}});
    }
  }, [navigate])

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <Createpost />
                <Postview id="32" postvideo="" postimage="post.png" avater="user.png" user="Surfiya Zakir" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home