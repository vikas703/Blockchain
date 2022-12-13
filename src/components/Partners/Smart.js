import React, { useEffect } from 'react';
import Search from '../../assets/trans.png';
import {FaEthereum ,FaInfinity} from 'react-icons/fa';
import {SiBinance} from 'react-icons/si';
import {TbLetterS} from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Smart = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])
  return (
    <div  className='in_smart'>
    <div data-aos='fade-up' >
    <img className='smart_img' src={Search} alt='img' />
    </div>
    
    <div data-aos='fade-up'  className='smart_text'>
    <p className='Client'>SERVICE</p>
    <h1>Smart Contract Auditing</h1>

    <p className='about_smart'>Audit Process For smart Contract is based on the 
        comprehensive approach we follow to investiagate the code 
        for security flaws and potential vulnerabilities
    </p>
    <div className='blockchains'>
    <span><FaEthereum/>Ethereum</span>
    <span><FaInfinity/>Polygon</span>
    <span><SiBinance/>BSC</span>
    <span><TbLetterS/>Solana</span>
    <span><FaEthereum/>EOS</span>
    <div className='smart_btn'>
    <a href='#'><button className='learn'> Learn More </button></a>
    </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Smart
