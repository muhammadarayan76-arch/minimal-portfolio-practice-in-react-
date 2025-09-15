import React from 'react'
import serviceImage from "../assets/Icon.svg"; // Put your image inside src/assets folder
import serviceImage1 from "../assets/Icon (1).svg"; // Put your image inside src/assets folder
import serviceImage2 from "../assets/Icon (2).svg"; // Put your image inside src/assets folder

const service = () => {
  return (
    <section class="services">
      <h2>Manage your entire community<br/> in a single system</h2>
      <p>Who is Nexcent suitable for?</p>
      <div class="service-cards">
      <div class="card">
        <img src={serviceImage} alt="service" />
        <h3>Membership<br/> Organisations</h3>
        <p>Our membership management<br/> software provides full automation of<br/> membership renewals and payments</p>
      </div>
      <div class="card">
           <img src={serviceImage1} alt="service" />
        <h3>National<br/> Associations</h3>
        <p>Our membership management<br/> software provides full automation of<br/> membership renewals and <br/> payments
        </p>
      </div>
      <div class="card">
           <img src={serviceImage2} alt="service" />
        <h3>Clubs And<br/> Groups</h3>
        <p>Our membership management <br/> software provides full automation of<br/> membership renewals and payments</p>
      </div>
    </div>
</section>



    
  )
}

export default service