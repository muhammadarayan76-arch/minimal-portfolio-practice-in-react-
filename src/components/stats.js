import React from 'react'
import statsImage from "../assets/Icon (3).svg"; // Put your image inside src/assets folder
import statsImage1 from "../assets/Icon (4).svg"; // Put your image inside src/assets folder
import statsImage2 from "../assets/Icon (5).svg"; // Put your image inside src/assets folder
import statsImage3 from "../assets/Icon (6).svg"; // Put your image inside src/assets folder
const stats = () => {
  return (
     <section class="stats-section">
    <div class="text">
      <h2>Helping a local <br />
        <span>business reinvent itself</span>
      </h2>
      <p>We reached here with our hard work and dedication</p>
    </div>

    

    <div class="stat"> 
      <div class="stat-item">
      <img src={statsImage} alt="Stats icon" />
        <div>
          <h3>2,245,341</h3>
          <p>Members</p>
        </div>
      </div>

      <div class="stat-item">
        <img src={statsImage2} alt="Stats icon" />
        <div>
          <h3>828,867</h3>
          <p>Event Bookings</p>
        </div>
      </div>
    </div>
    <div class="stat"> 

      <div class="stat-item">
          <img src={statsImage1} alt="Stats icon" />
        <div>
          <h3>46,328</h3>
          <p>Clubs</p>
        </div>
      </div>

      <div class="stat-item">
         <img src={statsImage3} alt="Stats icon" />
        <div>
          <h3>1,926,436</h3>
          <p>Payments</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default stats