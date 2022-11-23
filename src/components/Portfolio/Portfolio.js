import React from 'react';
import './Portfolio.css';
import {FaLessThan , FaGreaterThan} from 'react-icons/fa'
import portfolio_img from '../../assets/portfolio_img.png'

const Portfolio = () => {
  return (
    <section>
    <div className='Portfolio'>
    <div className='Portfolio_text'>
    <p className='Client'>PORTFOLIO</p>
    
    <h1>Latest Work</h1>
    </div>
    <div className='portfolio_btn'>
    <button className='diff_btn'>Ethereum</button>
    <button className='same_btn'>Binance SC</button>
    <button className='same_btn'>NFT</button>
    <button className='same_btn'>Solana</button>
    </div>

    <div className='slider'>
    <i className='arrows'><FaLessThan/></i>

    <div className='portfolio_img'>
    <img src={portfolio_img} alt='img' />
    <h2>StackOS Audit Report</h2>

    <div className='portfolio_btns'>
    <button className='portfolio_btns1'>VIEW</button>
    <button className='portfolio_btns1'>DOWNLOAD</button>
    </div>

    </div>

    <div className='portfolio_img'>
    <img src={portfolio_img} alt='img' />
    <h2>StackOS Audit Report</h2>

    <div className='portfolio_btns'>
    <button className='portfolio_btns1'>VIEW</button>
    <button className='portfolio_btns1'>DOWNLOAD</button>
    </div>

    </div>

    <div className='portfolio_img'>
    <img src={portfolio_img} alt='img' />
    <h2>StackOS Audit Report</h2>

    <div className='portfolio_btns'>
    <button className='portfolio_btns1'>VIEW</button>
    <button className='portfolio_btns1'>DOWNLOAD</button>
    </div>

    </div>

    <i className='arrows'><FaGreaterThan/></i>
    </div>
    <button className='portfolio_btns1'>BUTTON</button>


    </div>

    </section>
  )
}

export default Portfolio
