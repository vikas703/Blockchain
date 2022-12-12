import React from 'react';
import fea1 from '../../assets/Fea1.png';
import fea2 from '../../assets/Fea2.png';
import fea3 from '../../assets/Fea3.png';
import fea4 from '../../assets/Fea4.png';
import fea5 from '../../assets/Fea5.png';


const Featured = () => {
  return (
    <div className='featured_in'>
    <div class="container3">

    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                <h3>Design</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                <h3>Code</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                <h3>Launch</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>
    
</div>
    
    </div>
  )
}

export default Featured
