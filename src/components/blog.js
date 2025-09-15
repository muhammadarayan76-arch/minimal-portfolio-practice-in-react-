import React from 'react'
import blogImage from "../assets/blog.svg"; // Put your image inside src/assets folder
import blogImage1 from "../assets/blog1.svg"; // Put your image inside src/assets folder
import blogImage2 from "../assets/blog2.svg"; // Put your image inside src/assets folder


const blog = () => {
  return (
    <section class="header2">
    <h2>Caring is the new marketing</h2>
    <p>The Nexcent blog is the best place to read about the latest membership insights,<br/>
      trends and more. See who's joining the community, read about how our community<br/>
      are increasing their membership income and lot's more.</p>
    <div class="header2-cards">
      <div class="card2">
              <img src={blogImage} alt="blog image" />

      </div>
      <div class="card2">
            <img src={blogImage1} alt="blog image" />


      </div>
      <div class="card2">
        <img src={blogImage2} alt="blog image" />


      </div>
    </div>
  </section>
  )
}

export default blog