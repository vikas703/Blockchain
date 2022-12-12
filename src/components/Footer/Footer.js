import React from 'react';
import './Footer.css';
import {AiOutlineDown} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import head from '../../assets/head.png';
import foot1 from '../../assets/foot1.png';
import foot2 from '../../assets/foot2.png';
import foot3 from '../../assets/foot3.png';
import foot4 from '../../assets/foot4.svg';
import foot5 from '../../assets/foot5.svg';
import foot6 from '../../assets/foot6.svg';
import foot7 from '../../assets/foot7.svg';
import foot8 from '../../assets/foot8.png';
import foot9 from '../../assets/foot9.png';
import foot10 from '../../assets/foot10.png';
import foot11 from '../../assets/foot11.svg';
import foot12 from '../../assets/foot12.svg';

const Footer = () => {
  return (
    <div className='last_footer'>
    <div className='final_footer'>

    <div className='footer1'>
    <h3>Parent Company</h3>
    <img src={head} alt='img' className='footer_head' />
    <p className='foot_p'>Delivers enterprise <br/>
     grade blockchain technology<br/>
    to leading companies<br/> worldwide.</p>
    <div className='white'>
    <img src={foot1} alt='img' className='white_img' />
    <p>ENG</p>
    <span><AiOutlineDown/></span>
    </div>
    <div className='foot_img'>
    <img src={foot2} alt='img' className='foot_img1'/>
    <img src={foot3} alt='img'className='foot_img1' />
    </div>
    </div>

    <div className='footer2'>
    <h3>Explore</h3>
    <p>Careers</p>
    <p>Courses</p>
    <p>Blockchain Security CTF</p>
    <p>QuillAudits Partner Program</p>
    <p>Referral Program</p>
    </div>

    <div className='footer3'>
    <h3>Services</h3>
    <p>Smart Contract Auditing</p>
    <p>Blockchain Pen Testing</p>
    <p>Due Diligence</p>
    </div>

    <div className='footer4'>
    <h3>Contact Us</h3>
    <p>LG 006, DLF Grand Mall, Mehrauli<br/>
     Gurgaon Road, Near Sikanderpur DLF<br/>
      Phase1, Sector 28, Gurugram,<br/>
       Haryana - 122002</p>

    <div className='footer4_mail'>
    <span><HiOutlineMail/></span>
    <p>contact@something.com</p>
    </div>
    </div>

    </div>
    
    <div className='social'>
    <h3>Join our Journey</h3>
    <div className='icons'>
    <img src={foot4} alt='img'  className='icon'/>
    <img src={foot5} alt='img'  className='icon'/>
    <img src={foot6} alt='img'  className='icon'/>
    <img src={foot7} alt='img'  className='icon'/>
    <img src={foot8} alt='img'  className='icon'/>
    <img src={foot9} alt='img'  className='icon'/>
    <img src={foot10} alt='img'  className='icon'/>
    <img src={foot11} alt='img'  className='icon'/>
    <img src={foot12} alt='img'  className='icon'/>
    </div>
    <p>All Rights Reserved. © Copyright 2022. </p>
    </div>
    
    </div>
   
  )
}

export default Footer
