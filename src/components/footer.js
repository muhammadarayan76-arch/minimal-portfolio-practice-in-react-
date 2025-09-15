import React from 'react'
import footerImage from "../assets/footerlogo.svg"; // Put your image inside src/assets folder


const footer = () => {
  return (
  <footer>
    <div class="footer-left">
      <div class="logo"><img src={footerImage} alt="Nexcent Logo" />
        <h2>Nexcent</h2>
      </div>
      <p>Copyright © 2020 Nexcent ltd.<br/>All rights reserved</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-dribbble"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Support</h4>
      <ul>
        <li><a href="#">Help center</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Status</a></li>
      </ul>
    </div>

    <div class="subscribe">
      <h4>Stay up to date</h4>
      <form>
        <input type="email" placeholder="Your email address" required />
        <button type="submit"><i class="fas fa-paper-plane"></i></button>
      </form>
    </div>
  </footer>  )
}

export default footer