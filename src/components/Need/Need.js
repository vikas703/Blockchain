import React from 'react';
import Catch from './Catch';
import FAQ from './FAQ';
import Featured from './Featured';
import './Need.css';
import Testimonials from './Testimonials';

const Need = () => {
  return (
    <section>
    <div className='container'>
    <div className='Need'>
    <div className='need_text'>
    <p className='Client'>WHY ARE WE HERE</p>
    <h1>What is the Need of</h1>
    <h1>Smart Contract Audit?</h1>

    <div className='smart_btn'>
    <button className='need_btn'>Talk to an Expert</button>
    </div>

    </div>

    <div className='need_box'>
    <p className='p1'>Smart Contract Audits Build Social Authority</p>

    <p className='p2'>Only 52.7% of the Exploited Web3 Projects were<br/> Audited.</p>

    <p className='p3'>47.3% of the Web3 Hacks in First Half of 2022 <br/>
     were due to Smart Contract Vulnerabilities.</p>

     <p className='p4'>Helps in Earning Users/Investors Trust for the Product</p>

     <p className='p5'>Helps in Earning Users/Investors Trust for the<br/> Product</p>
    
    </div>
    </div>

    <div className='featured'>
    <Featured />
    </div>

    <div className='testimonials'>
    <Testimonials />
    </div>

    <div className='FAQ'>
    <FAQ />
    </div>
    
    <div className='Catch'>
    <Catch />
    </div>

    </div>
    
    </section>
  )
}

export default Need
