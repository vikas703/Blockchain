import React from 'react';
import {AiOutlineCodeSandbox} from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className='testimonials_in'>

      <div className='testimonials_text'>
      <p className='Client'>TESTIMONIALS</p>
      <div className='testimonials_h1'>
      <h1>What our Clients are saying</h1>
      <button className='btn'>Read More</button>
      </div>
      </div>

      <div className='testimonials_boxes_head'>
      <div className='testimonials_boxes'>
      <span className='testimonials_boxes1'>
      <span className='testimonials_boxes2'><AiOutlineCodeSandbox/></span>
      Stack<b>OS</b>
      </span>
      <p>Very professional and timed delivery. Also very <br/> prompt in responses and queries.</p>
      <p><b>Vishnu Korde</b><br/>CEO, StackOS</p>
      </div>

      <div className='testimonials_boxes'>
      <span className='testimonials_boxes1'>
      <span className='testimonials_boxes2'><AiOutlineCodeSandbox/></span>
      Stack<b>OS</b>
      </span>
      <p>Very professional and timed delivery. Also very <br/> prompt in responses and queries.</p>
      <p><b>Vishnu Korde</b><br/>CEO, StackOS</p>
      </div>

      <div className='testimonials_boxes'>
      <span className='testimonials_boxes1'>
      <span className='testimonials_boxes2'><AiOutlineCodeSandbox/></span>
      Stack<b>OS</b>
      </span>
      <p>Very professional and timed delivery. Also very <br/> prompt in responses and queries.</p>
      <p><b>Vishnu Korde</b><br/>CEO, StackOS</p>
      </div>
      
      </div>
      

    </div>
  )
}

export default Testimonials
