import React from 'react';
import {FaDiceD20} from 'react-icons/fa';
import Blockchain from './Blockchain';
import Diligence from './Diligence';
import './Partners.css'
import Smart from './Smart';
const Partners = () => {
  return (
    <div className='container1'>
    <div className='Smart'>
    <Smart />
    </div>

    <div className='testing'>
    <Blockchain />
    </div>
    
    <div className='diligence'>
    <Diligence />
    </div>
 
    </div>
    
  )
}

export default Partners
