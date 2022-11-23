import React from 'react';
import {IoMdArrowDropupCircle , IoMdArrowDropdownCircle} from 'react-icons/io';

const FAQ = () => {
  return (
    <div className='main_faq'>

    <div className='faq_text'>
    <p className='Client'>FAQ</p>
    <h1>Frequently Asked <br/> Questions</h1>
    <p>Visit our help center to clear out any second thoughts that <br/> you may have regarding our services.</p>
    <div className='smart_btn'>
    <button className='btn'>Contact Us </button>
    </div>
    </div>

    <div className='faq_ques'>
    <div className='ques1'>
    <div className='inques1'>
    <span><b>What is smart contract security?</b> </span>
    <span className='ques_icon'><IoMdArrowDropupCircle/></span>
    </div>
    <p>Smart Contract Security is a set of best practices to identify<br/>
     bugs & vulnerabilities in the code that can lead to security <br/>
    breaches. These loopholes have lead to huge losses recently.</p>
    </div>

    <div className='ques2'>
    <div className='inques1'>
    <span><b>What is smart contract security?</b> </span>
    <span className='ques_icon'><IoMdArrowDropdownCircle/></span>
    </div>    
    </div>

    <div className='ques2'>
    <div className='inques1'>
    <span><b>What is a smart contract audit?</b> </span>
    <span className='ques_icon'><IoMdArrowDropdownCircle/></span>
    </div>    
    </div>

    <div className='ques2'>
    <div className='inques1'>
    <span><b>Why do smart contracts fail?</b> </span>
    <span className='ques_icon'><IoMdArrowDropdownCircle/></span>
    </div>    
    </div>

    
    </div>
      
    </div>
  )
}

export default FAQ
