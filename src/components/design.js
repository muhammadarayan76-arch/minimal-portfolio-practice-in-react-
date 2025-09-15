import React from 'react'
import designImage from "../assets/design.svg"; // Put your image inside src/assets folder

const Design = () => {
  return (
      <section class="design-section">
    <div class="design-img">
      <img src={designImage} alt="Design Illustration" />
    </div>
    <div class="design-text">
      <h2>How to design your site footer like we did</h2>
      <p>
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br/> molestie, massa nunc
        varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br/>
        libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br/>
        nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer<br/>
        in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br/>
        ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
      </p>
      <button class="btn">Learn More</button>
    </div>
  </section>
  )
}

export default Design