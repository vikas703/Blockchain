import React from 'react';
import './Together.css';
import pic from '../../assets/pic.svg';


const Together = () => {
  return (
    <section>
    <div className='container'>
    <div className='blue'>
    <div className='blue_text'>
    <h1>Join Hands With us to <br/> secure Web3 Together</h1>
    <p>Help us in our journey to secure web3 by joining our team of talented<br/>
     individuals spread across the globe</p>
     <div className='blue_btn'>
     <button className='blue_btn1'>APPLY NOW!</button>
     </div>
    </div>
    <div className='blue_img'>
    <img src={pic} alt='img'  className='blue_img1'/>
    </div>
    
    </div>
    </div>
    </section>
  )
}

export default Together
