import React from 'react';
import logements from "../logements.json"
import leftArrow from "../assets/Left_arrow.png"
import rightArrow from "../assets/Right_arrow.png"
function Carrousel() {
    const items = logements[2].pictures[3]

  return (
    <div className="carrousel">
      
      <button className='carrousel_btn_left'>
      <img src={leftArrow} alt='leftArrow' className='left_arrow_img'/>
      </button>
      
      <img src={items} alt="img-banner " className="img-banner" />
      
      <button className='carrousel_btn_right'>
      <img src={rightArrow} alt='rightArrow' className='right_arrow_img'/>
      </button>
      
    </div>
  );
}
export default Carrousel;