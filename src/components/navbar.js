import React from 'react'

const Navbar = () => {
  return (
    <div> 
     <nav class="navbar">
    <div class="logo">Nexcent</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Feature</a></li>
      <li><a href="#">Product</a></li>
      <li><a href="#">Testimonial</a></li>
      <li><a href="#">FAQ</a></li>
    </ul>
    <div class="auth-buttons">
      <a href="#" class="login">Login</a>
      <a href="#" class="signup">Sign up</a>
    </div>
  </nav>
    </div>
    
  )
}

export default Navbar