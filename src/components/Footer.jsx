import React from 'react';
import '../stylesheets/Footer.css';
import mail from '../assets/mail-142.svg'

export default function Footer() {

    
  return (
      <footer>
        <p>
          Want to hear more from us? Subscribe to our newsletter to get 
          regular updates on our new collections and items.
        </p>
        <img src={mail} alt='logo' id='emailIcon'/>
        <div id='footbar'>
          <section className='footbarCat'>
            <h3>Support</h3>
            <p>Frequently Asked Questions</p>
            <p>Deliveries</p>
            <p>Returns</p>
            <p>Contact Us</p>
          </section>
          <section className='footbarCat'>
            <h3>Legal</h3>
            <p>Privacy Notice</p>
            <p>Terms and Conditions</p>
          </section>
          <section className='footbarCat'>
            <h3>More From Us</h3>
            <p>Mobile App</p>
            <p>About Us</p>
            <p>Media & Press</p>
            <p>Careers</p>
          </section>
        </div>
      </footer>
  )
}
