import React from 'react';
import './Head.css';
import back from '../../assets/back.png';
import head from '../../assets/head.png';
import {RiArrowDropDownLine} from 'react-icons/ri';

const Head = () => {
  return (
    <div className='All' >
    <div className='nav'>
    <div className='img1'>
    <img src={head} alt='company-logo' />
    </div>
    
    <div className='two'>
    <span className='arrow1'>Audit Services <i className='arrow'><RiArrowDropDownLine /></i></span>
    <span>Pricing</span>
    <span>Blog</span>
    <span className='arrow1'>Resources <i className='arrow'><RiArrowDropDownLine /></i></span>
    <button className='btn'>Portfolio</button>
    <button className='btn'>Request An Audit</button>
    </div>

    </div>
    
    <div className='head'>
      <div className='text_part'>
      <p className='big'>Emerging Web3 Ventures
         Trust Our Smart Contract
         Audits & Diligence Services
      </p>
      <p className='small'>QuillAudits, Making web3 a Safer place</p>

      <div className='button_part'>
      <button className='btn'>Request Free Quote</button>
      <button className='head_btn'>Explore Services</button>
      </div>

      </div>
      <div className='img_part'>
      <img className='img_part1' src={back} alt='Img' />
      </div>
    </div>

    <div className='footer'>

    <div className='part'>
    <div className='footer_text'>
    <h1 className='big_text'>$12.8B</h1>
    </div>
    <div className='small_footer'>
    <p className='small_text'>Amount Lost to <br/> DeFi Hacks in 2021</p>
    </div>
    </div>

    <div className='part'>
    <div className='footer_text'>
    <h1 className='big_text'>600K</h1>
    </div>
    <div className='small_footer'>
    <p className='small_text'>Lines of Codes <br/> Secured by QuillAudits</p>
    </div>
    </div>

    <div className='part'>
    <div className='footer_text'>
    <h1 className='big_text'>$14.6B</h1>
    </div>
    <div className='small_footer'>
    <p className='small_text'>Amount Protected <br/> By QuillAudits</p>
    </div>
    </div>

    </div>



    </div>
  )
}

export default Head
