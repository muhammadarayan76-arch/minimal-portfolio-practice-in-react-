import React from 'react'
import Navbar from './navbar'
import homeImage from "../assets/Illustration.svg"; // Put your image inside src/assets folder

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
         {/* Hero Section */}
  <hero  className="hero">
    <div className="hero-text">
      <h1>Lessons and insights <br /><span>from 8 years</span></h1>
      <p>Where to grow your business as a photographer: site or social media?</p>
      <a href="#" class="btn">Register</a>
    </div>
    <div className="home-image">
        <img src={homeImage} alt="Home" />
      </div>
  </hero>
    </div>
  )
}

export default Home


