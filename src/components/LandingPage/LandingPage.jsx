import React from 'react';
import Data from '../../utils/Data.json';
import video from '../../assets/video.mp4';
import '../../styles/LandingPage.css';
import { IoCloudDoneSharp } from "react-icons/io5";
import { RiVideoFill } from "react-icons/ri";
import Product1 from './Product1'
import WarrantyBar from './WarrantyBar';
import Table from './Table';
import VideoPlayer from './VideoPlayer';
import SubscribeSection from './SubscribeSection';
import CoffeeShop from './CoffeeShop';
import ProductPage from './ProductPage';

function LandingPage() {
  return (
    <div className="landing-page">
   
      <div className='header'>
        <div className='h-left'>
          <div className='image-container'>
           
            <img src={Data.main.banner} alt="" className='h-image' />

         
            <img src={Data.main.banner1} alt="" className='h1-image' />
            <img src={Data.main.banner2} alt="" className='h2-image' />

           
            <div className='l-content'>
                <button className='rating-btn'>4.7 star over 275 ratings</button>
              <h3>Brew the Perfect Cup<br />Every Time</h3>
              <p>Engineered for excellence, designed for coffee lovers.</p>
              <ul>
                <li> <IoCloudDoneSharp /> 4-In-1 Coffee Machine</li>
                <li> <IoCloudDoneSharp /> Espresso & Nespresso Capsule Compatible</li>
                <li> <IoCloudDoneSharp /> Single-Serve Coffee</li>
              </ul>
              <button className="discover-btn">
                Discover More
                <RiVideoFill />
              </button>
              <button className='left-btn'>4- in - 1</button>
            </div>

           
           
          </div>
        </div>
      </div>

     {/* //////////////////////////////////////////////// */}


<div className='main-content-2'>
    <div className='m-content'>
        <h3>What Makes Our Coffee Makers <br /> the Best Choice?</h3>
    </div>

    <div className='best-image'>
        <div className='feature'>
            <img src={Data.best.product} alt="Superior Taste" />
            <h4>Superior Taste</h4>
            <p>Experience coffee like never before with rich, bold flavors and a smooth finish.</p>
        </div>

        <div className='feature'>
            <img src={Data.best.product1} alt="Convenience at Fingertips" />
            <h4>Convenience at Fingertips</h4>
            <p>With programmable features and quick brew times, enjoy your perfect cup of coffee without the wait.</p>
        </div>

        <div className='feature'>
            <img src={Data.best.product2} alt="Energy Efficient" />
            <h4>Energy Efficient</h4>
            <p>Our coffee makers are designed to be energy-efficient, saving you money on your electricity bills while being eco-friendly.</p>
        </div>
    </div>
</div>
{/* //////////////////////////////////////////////////////// */}




<WarrantyBar/>
     
      <Product1 />
      <Table/>
      <VideoPlayer/>
      <CoffeeShop/>
      <ProductPage id="1"/>
      <SubscribeSection/>
     
      
    

{/* ////////////////////////////// */}



     
    </div>
   
  );
}

export default LandingPage;
