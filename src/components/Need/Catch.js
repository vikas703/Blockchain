import React from 'react';
import Mask from '../../assets/Mask.png';

const Catch = () => {
  return (
    <div className='testimonials_in'>

      <div className='testimonials_text'>
      <p className='Client'>OUR BLOG</p>
      <div className='testimonials_h1'>
      <h1>Catch up on the news</h1>
      <button className='btn'>Read More</button>
      </div>
      </div>

      <div className='Catch_2'>
      <div className='Catch_img'>
      <img className='mask' src={Mask} alt='img' />
      <p className='Client'>Web3 Security: Classification & <br/> Analysis of Web3 Hacks</p>
      <p>15 Mar, 2023</p>
      <p>At every point in time, the internet keeps changing<br/>
       dimensions to solve the shortcoming of the previous<br/>
        version.</p>
      </div>

      <div className='Catch_img'>
      <img className='mask' src={Mask} alt='img' />
      <p className='Client'>Web3 Security: Classification & <br/> Analysis of Web3 Hacks</p>
      <p>15 Mar, 2023</p>
      <p>At every point in time, the internet keeps changing<br/>
       dimensions to solve the shortcoming of the previous<br/>
        version.</p>
      </div>

      <div className='Catch_img'>
      <img className='mask' src={Mask} alt='img' />
      <p className='Client'>Web3 Security: Classification & <br/> Analysis of Web3 Hacks</p>
      <p>15 Mar, 2023</p>
      <p>At every point in time, the internet keeps changing<br/>
       dimensions to solve the shortcoming of the previous<br/>
        version.</p>
      </div>

      
      
      </div>
      

    </div>
  )
}

export default Catch
