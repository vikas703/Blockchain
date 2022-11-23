import React from 'react';
import person from '../../assets/person.png';


const Blockchain = () => {
  return (
    <div className='Blockchain'>
    <div className='smart_text'>
    <p className='Client'>SERVICE</p>
    <h1>Blockchain Penetration Testing</h1>

    <p className='about_smart'>QuillAudits proven strategy to vulnerabilities specific to <br/>
        Blockchain technology comes with a mix-blend of conventional <br/>
        pentesting approach and dynamic blockchain analysis.
    </p>
    <div className='blockchains'>
    
    <div className='smart_btn'>
    <button className='btn'>Learn More</button>
    </div>
    </div>
    </div>

    <div >
    <img className='blockchain_img' src={person} alt='img' />
    </div>
    </div>
  )
}

export default Blockchain
