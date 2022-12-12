import React, { useRef } from 'react';
import './Head.css';
import {FaBars,FaTimes} from 'react-icons/fa';
import {TiArrowDownThick} from 'react-icons/ti';

const Head = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className='All' >
    <div className='nav'>
    <div className='img1'>
    <h1>Web 3.0</h1>
    </div>
    <button className='nav_btn ' onClick={showNavbar} ><FaBars/></button>
    <div className='two' ref={NavRef}>
    <p>Hello? vikas here, i belive the next big thing might be web3.0! <b>Do you belive?</b> <br/>
    <br/>
    Made this webside with React and Fun If you like my work or you want to contact me.</p>
    <span className='nav_arr'><TiArrowDownThick/></span>
    <a href='https://vikas703.github.io/React-Website/' target='_blank'>Click Here</a>
    <button className='nav_btn nav_close_btn' onClick={showNavbar}><FaTimes/>  </button>
    </div>

    </div>

    <div className='middle_text'>
    <p className='big'> Web3 has become <br/> 
    a catch-all term for the <br/> 
    vision of a new, better internet. 
    </p>
    </div>
    
    <div className='head'>
      <div className='text_part'>
      
      <p className='small'>At its core, <br/>
      Web3 uses blockchains, cryptocurrencies,<br/>
      to give power back to the users in the form of ownership.</p>

      </div>
      
    </div>

    </div>
  )
}

export default Head

/* 
      <div className='img_part'>
      <span className='heading'><h1>Web3.0</h1></span>
      </div>

      <div className='button_part'>
      <button className='btn'>Request Free Quote</button>
      <button className='head_btn'>Explore Services</button>
      </div>
      */