import React from 'react';
import {FaDiceD20} from 'react-icons/fa';
import Blockchain from './Blockchain';
import Diligence from './Diligence';
import './Partners.css'
import Secure from './Secure';
import Smart from './Smart';
const Partners = () => {
  return (
    <section>
    <div className='container'>
    <p className='Client'>CLIENT</p>
    <br/>
    <h1>Partners</h1>
    <div className='partners'>

    <span><FaDiceD20 /> PARTNERS</span>
    <span><FaDiceD20 /> PARTNERS</span>
    <span><FaDiceD20 /> PARTNERS</span>
    <span><FaDiceD20 /> PARTNERS</span>
    <span><FaDiceD20 /> PARTNERS</span>
    <span><FaDiceD20 /> PARTNERS</span>
    
    </div>

    <div className='Smart'>
    <Smart />
    </div>

    <div className='testing'>
    <Blockchain />
    </div>
    
    <div className='diligence'>
    <Diligence />
    </div>
    
    <div className='Secure'>
    <Secure />
    </div>

    </div>
    
    </section>
  )
}

export default Partners
