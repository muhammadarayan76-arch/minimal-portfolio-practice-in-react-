import React from 'react'
import clientsImage from "../assets/Logo.svg"; // Put your image inside src/assets folder
import clientsImage1 from "../assets/logo1.svg"; // Put your image inside src/assets folder
import clientsImage2 from "../assets/Logo (2).svg"; // Put your image inside src/assets folder
import clientsImage3 from "../assets/Logo (3).svg"; // Put your image inside src/assets folder
import clientsImage4 from "../assets/Logo (4).svg"; // Put your image inside src/assets folder
import clientsImage5 from "../assets/Logo (5).svg"; // Put your image inside src/assets folder
import clientsImage6 from "../assets/Logo (6).svg"; // Put your image inside src/assets folder







const Clients = () => {
  return (
    <div className='clients-container'>
    {/* Clients Section */}
    


     <section class="clients">
    <h2>Our Clients</h2>
    <p>We have been working with some Fortune 500+ clients</p>
         <div className="clients-image">
               <img src={clientsImage} alt="Clients" />
                <img src={clientsImage1} alt="Clients" />
                 <img src={clientsImage2} alt="Clients" />
                  <img src={clientsImage3} alt="Clients" />
                   <img src={clientsImage4} alt="Clients" />
                   <img src={clientsImage5} alt="Clients" />
                   <img src={clientsImage6} alt="Clients" />
             </div>
  </section>
    </div>
  )
}

export default Clients