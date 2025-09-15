import React from 'react'
import teslaImage from "../assets/tesla.svg"; // Put your image inside src/assets folder
import teslaImage1 from "../assets/teslaLogo.svg"; // Put your image inside src/assets folder
import teslaImage2 from "../assets/teslaLogo1.svg"; // Put your image inside src/assets folder
import teslaImage3 from "../assets/teslaLogo2.svg"; // Put your image inside src/assets folder
import teslaImage4 from "../assets/teslaLogo3.svg"; // Put your image inside src/assets folder
import teslaImage5 from "../assets/teslaLogo4.svg"; // Put your image inside src/assets folder
import teslaImage6 from "../assets/teslaLogo5.svg"; // Put your image inside src/assets folder

const tesla = () => {
  return (
      <section class="testimonial-section">
    <div class="testimonial-img">
      <img src={teslaImage} alt="Tesla" />
    </div>
    <div class="testimonial-text">
      <p>
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/>
        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br/>
        enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/>mi
        blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br/>
        eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/>
        vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br/>
        id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
      </p>
      <h4>Tim Smith</h4>
      <p class="role">British Dragon Boat Racing Association</p>
      <div class="brands">
        <img src={teslaImage1} alt="tesla icon" />
        <img src={teslaImage2} alt="tesla icon" />
        <img src={teslaImage3} alt="tesla icon" />
        <img src={teslaImage4} alt="tesla icon" />
        <img src={teslaImage5} alt="tesla icon" />
        <img src={teslaImage6} alt="tesla icon" />

        <a href="#" class="customers">Meet all customers →</a>
      </div>
    </div>
  </section>
  )
}

export default tesla