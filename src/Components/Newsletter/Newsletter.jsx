import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter'>
     <h1>Get Exclusiove Offers on Your Email</h1>
     <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )

}
export default Newsletter;