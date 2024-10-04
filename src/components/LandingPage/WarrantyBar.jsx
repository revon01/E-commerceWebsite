import React from 'react';
import '../../styles/WarrantyBar.css';
import Data from '../../utils/Data.json';


function WarrantyBar() {
  return (
    <div className="warranty-bar">
      
      <div className="warranty-item">
        <img src={Data.Warranty.product} alt="1-Year Limited Warranty" />
        <p><strong>1-Year Limited Warranty</strong></p>
      </div>

      <div className="warranty-item">
        <img src={Data.Warranty.product1} alt="Extended Warranty Options" />
        <p><strong>Extended Warranty Options</strong></p>
      </div>

      <div className="warranty-item">
        <img src={Data.Warranty.product2} alt="Hassle-Free Replacements" />
        <p><strong>Hassle-Free Replacements</strong></p>
      </div>
    </div>
  );
}

export default WarrantyBar;