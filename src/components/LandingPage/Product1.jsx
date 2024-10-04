import React from 'react';
import Data from '../../utils/Data.json';
import '../../styles/Product1.css';

    
function Product1() {
  return (
    <div className='extraction-section'>
      <h2>Perfect Extraction for a Perfect Cup</h2>

      <div className='extraction-content'>
        <div className='description-l'>
          <div className='item-list'>
            <img src={Data.Extraction.product1} alt="Customizable Single Servings" />
            <h4>Customizable Single Servings</h4>
            <p>Compatible with Keurig K-Cup, other similar pods.</p>
          </div>

          <div className='item-list'>
            <img src={Data.Extraction.product2} alt="Fully Automatic" />
            <h4>Fully Automatic</h4>
            <p>24-hour brew start, temperature control, auto off.</p>
          </div>

          <div className='item-list'>
            <img src={Data.Extraction.product3} alt="12-Cup Brewing" />
            <h4>12-Cup Brewing</h4>
       
            <p>Customize with drip-programmable carafe brewing.</p>
          </div>
        </div>

        <div className='coffee-machine-image'>
          <img src={Data.Extraction.product} alt="Coffee Machine" />
        </div>


        <div className='description-r'>
          <div className='item-list'>
            <img src={Data.Extraction.product4} alt="Espresso Capsule Brewer" />
            <h4>Espresso Capsule Brewer</h4>
            <p>Compatible with Nespresso OriginalLine capsules.</p>
          </div>

          <div className='item-list'>
            <img src={Data.Extraction.product5} alt="Brew Pause Feature" />
            <h4>Brew Pause Feature</h4>
            <p>Sneak a cup before the full brew cycle is done.</p>
          </div>

          <div className='item-list'>
            <img src={Data.Extraction.product6} alt="Steam Wand" />
            <h4>Steam Wand</h4>
            <p>Steam wand whips up cappuccinos and lattes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product1