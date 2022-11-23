import React from 'react';
import fea1 from '../../assets/Fea1.png';
import fea2 from '../../assets/Fea2.png';
import fea3 from '../../assets/Fea3.png';
import fea4 from '../../assets/Fea4.png';
import fea5 from '../../assets/Fea5.png';


const Featured = () => {
  return (
    <div className='featured_in'>
    <div className='featured_text'>
    <p className='Client'>MENTIONS</p>
    <h1>As Featured In</h1>
    </div>
    <div className='featured_box'>
    <div className='box1'>
    <img  src={fea1} alt='img'/>
    <p className='Client'>Read More</p>
    </div>

    <div className='box1'>
    <img  src={fea2} alt='img'/>
    <p className='Client'>Read More</p>
    </div>

    <div className='box1'>
    <img  src={fea3} alt='img'/>
    <p className='Client3'>Read More</p>
    </div>

    <div className='box1'>
    <img  src={fea4} alt='img'/>
    <p className='Client4'>Read More</p>
    </div>

    <div className='box1'>
    <img  src={fea5} alt='img'/>
    <p className='Client5'>Read More</p>
    </div>

    <div className='box1'>
    <img  src={fea1} alt='img'/>
    <p className='Client'>Read More</p>
    </div>
    
    </div>
    
    </div>
  )
}

export default Featured
