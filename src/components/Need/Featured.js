import React from 'react';
import bitcoin from '../../assets/bitcoin.png'
import eth from '../../assets/Eth.png'
import doge from '../../assets/doge.png'


const Featured = () => {
  return (
    <div className='featured_in'>
    <h1>Cryptocurrencys</h1>
    <div class="container3">

    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src={bitcoin} />
                <h3>Bitcoin</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act
                 as money and a form of payment outside the control of any one person, group, or entity, 
                thus removing the need for third-party involvement in financial transactions.</p>
                    
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face face1">
            <div class="content">
            <img src={eth} />
            <h3>Ethereum</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Ethereum is a decentralized blockchain platform that establishes
                 a peer-to-peer network that securely executes and verifies
                  application code, called smart contracts.</p>
                    
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face face1">
            <div class="content">
            <img src={doge} />
            <h3>Dogecoin</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Dogecoin (DOGE) is a peer-to-peer, open-source cryptocurrency.
                 It is considered an altcoin and was launched in December 2013 
                 with the image of a Shiba Inu dog as its logo</p>
                   
            </div>
        </div>
    </div>
    
</div>
    
    </div>
  )
}

export default Featured
