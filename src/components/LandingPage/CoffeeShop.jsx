import React from 'react';
import Data from '../../utils/Data.json';
import '../../styles/CoffeeShop.css'

function CoffeeShop() {
  return (
    <div className='coffee-shop'>
   
      <div className='main-container'>
        <h2>𝒀𝒐𝒖𝒓 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒍 <br/>𝑪𝒐𝒇𝒇𝒆𝒆 𝑺𝒉𝒐𝒑 𝒂𝒕 𝑯𝒐𝒎𝒆</h2>
      </div>

  <div className='coffee-type-container'>
    <div className='coffee-type'>
        <img src={Data.images.item4} alt="Drip Coffee" />
          <h3>Drip Coffee</h3>
        </div>
        <div className='coffee-type'>
          <img src={Data.images.item3} alt="Single Serve Coffee" />
          <h3>Single Serve Coffee</h3>
        </div>
        <div className='coffee-type'>
          <img src={Data.images.item1} alt="Single Serve Nespresso" />
          <h3>Single Serve Nespresso</h3>
        </div>
        <div className='coffee-type'>
          <img src={Data.images.item2} alt="Steamer/Frother" />
          <h3>Steamer/Frother</h3>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;

