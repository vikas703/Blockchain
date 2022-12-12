import React from 'react';
import persons from '../../assets/persons2.png';
import {GiFeather} from 'react-icons/gi'


const Diligence = () => {
  return (
    <div className='Diligence'>
    <div >
    <img className='dili_img' src={persons} alt='img' />
    </div>
    
    <div className='smart_text'>
    <p className='Client'>SERVICE</p>
    <h1>Due Diligence</h1>

    <p className='about_smart'>Significant threats involved in <br/>
        smart contracts, which can lead to many critical 
        possibilities.
    </p>
    <div className='blockchains'>
    <span className='feather1'><i className='feather'><GiFeather/></i>DeFi Due Diligence</span>
    <span className='feather1'><i className='feather'><GiFeather/></i>NFT Due Diligence</span>
    <span className='feather1'><i className='feather'><GiFeather/></i>Rug Pull Due Diligence</span>
    <div className='smart_btn'>
    <button className='btn'>Explore</button>
    </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Diligence
