import React, { useEffect } from 'react';
import Blockchain from './Blockchain';
import Diligence from './Diligence';
import './Partners.css'
import Smart from './Smart';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <div data-aos='fade-up' className='container1'>
    <div className='Smart'>
    <Smart />
    </div>

    <div data-aos='fade-right' className='testing'>
    <Blockchain />
    </div>
    
    <div data-aos='fade-left' className='diligence'>
    <Diligence />
    </div>
 
    </div>
    
  )
}

export default Partners
