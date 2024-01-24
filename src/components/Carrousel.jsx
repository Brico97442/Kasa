import React, { useState } from 'react';
import logements from "../logements.json"
import leftArrow from "../assets/Left_arrow.png"
import rightArrow from "../assets/Right_arrow.png"
// function Carrousel() {
//     const items = logements[2].pictures[3]

//   return (
//     <div className="carrousel">
      
//       <button className='carrousel_btn_left'>
//       <img src={leftArrow} alt='leftArrow' className='left_arrow_img'/>
//       </button>
      
//       <img src={items} alt="img-banner " className="img-banner" />
      
//       <button className='carrousel_btn_right'>
//       <img src={rightArrow} alt='rightArrow' className='right_arrow_img'/>
//       </button>
      
//     </div>
//   );
// }
// export default Carrousel;

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = logements[16].pictures;

  const previousClick = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

  const nextClick = () => {
    const newIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(newIndex);
  };
  
  const showControls = pictures.length > 1;

  return (
    <div className="carrousel">
        <img src={pictures[currentIndex]} alt="img-banner" className="img-banner" />
      
      {showControls && (
        <>
          <button className='carrousel_btn_left' onClick={previousClick}>
            <img src={leftArrow} alt='leftArrow' className='left_arrow_img'/>
          </button>
          
          <button className='carrousel_btn_right' onClick={nextClick}>
            <img src={rightArrow} alt='rightArrow' className='right_arrow_img'/>
          </button>

          <div className="carrousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrousel;