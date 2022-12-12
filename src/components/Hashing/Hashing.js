import React from 'react';
import './Hashing.css';
import Hash from '../../assets/Hash.svg';
import Hash2 from '../../assets/Union1.svg';
import Hash3 from '../../assets/Union2.svg';

const Hashing = () => {
  return (
    <div className='Hashing'>
    <div className='Hash_text'>
    <img src={Hash} alt='img' className='hash1' />
    <p>DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to your Inbox.</p>
    <p>Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step<br /> ahead.</p>
    <input type='text' placeholder='youremail@gmail.com' className='hash_input' />
    
    </div>
    
    
    <div className='Hash_img'>
    <img src={Hash3} alt='img' className='hash_img2'/>
    </div>


    </div>
  )
}

export default Hashing
