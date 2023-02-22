import React from 'react'
import "./Footer.css"
import logo from "../assets/PUMA_Logo_Cat.png"
import Loading from './Loading'

// const date= new Date()
// const year=date.getFullYear()



function Footer() {
  return (
    <div className="footer">
   
      <div className="upper_footer">
        <div className="about">
          <img src={logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus nemo delectus sapiente incidunt itaque, facilis laboriosam vel omnis dignissimos!</p>
          <span>
            <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          </span>
          
        </div>
        <div className="plan_event">
          <h2>Plan Events</h2>
          <p>Create and Set Up</p>
          <p>Sell Tickets</p>
          <p>Online RSVP</p>
          <p>Online Events</p>
          <h2>Brands DP</h2>
          <p>Create DP</p>
          <p>Use DP</p>
        </div>

        <div className="brands">
          <h2>Brands</h2>
          <p>About Us</p>
          <p>Press</p>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>How it Works</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

        <div className="stayInLoop">
          <h2>Stay In The Loop</h2>
          <p>Join our miling Events</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex saepe harum nesciunt? Praesentium, eaque.</p>
             
            <form className="form">
              <input placeholder="Enter your Email Address" type="email" />
              <button>Subscribe Now</button>
            </form>  
             
        </div>
      </div>
      <div className="copyright">
          <p>Copyright &copy; 2022-{new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer