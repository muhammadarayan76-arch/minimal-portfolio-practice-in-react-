import React from 'react'
import aboutImage from "../assets/about.svg"; // Put your image inside src/assets folder

const about = () => {
  return (
      <section class="about">
    
    <div class="about-img">
       <img src={aboutImage} alt="About Illustration" />
    </div>

    <div class="about-text">
      <h2>The unseen of spending three<br/> years at Pixelgrade</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/>accumsan quam vitae
        est varius fringilla. Pellentesque placerat vestibulum lorem sed <br/>porta. Nullam mattis tristique iaculis.
        Nullam pulvinar sit amet risus pretium auctor. Etiam<br/> quis massa pulvinar, aliquam quam vitae, tempus sem.
        Donec elementum pulvinar odio.</p>
      <a href="#" class="btn">Learn More</a>
    </div>

  </section>

  )
}

export default about