import React from 'react';
import Search from '../../assets/trans.png';
import {FaEthereum ,FaInfinity} from 'react-icons/fa';
import {SiBinance} from 'react-icons/si';
import {TbLetterS} from 'react-icons/tb';

const Smart = () => {
  return (
    <div className='in_smart'>
    <div >
    <img className='smart_img' src={Search} alt='img' />
    </div>
    
    <div className='smart_text'>
    <p className='Client'>SERVICE</p>
    <h1>Smart Contract Auditing</h1>

    <p className='about_smart'>Our Audit Process For smart Contract is based on the <br/>
        comprehensive approach we follow to investiagate the code <br/>
        for security flaws and potential vulnerabilities
    </p>
    <div className='blockchains'>
    <span><FaEthereum/>Ethereum</span>
    <span><FaInfinity/>Polygon</span>
    <span><SiBinance/>BSC</span>
    <span><TbLetterS/>Solana</span>
    <span><FaEthereum/>EOS</span>
    <div className='smart_btn'>
    <button className='btn'>Explore</button>
    </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Smart
