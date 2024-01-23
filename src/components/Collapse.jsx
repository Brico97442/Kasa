import React,{useState} from 'react';
import chevron from "../assets/chevron.png"
function Collapse() {
  const [isOpen,setIsOpen]= useState(false);
  
  return (
    <div className={`collapse ${isOpen ? 'isOpen' : ''}`}>
     
     <div className='collapse_header'>
        <p className='collapse_title'>Title</p>
        
        <button  className={`collapse_header_button ${isOpen ? 'isOpen' : ''}`} onClick={()=> setIsOpen(!isOpen)}>
          <img src={chevron} alt='chevron-img'  className={`collapse_header_button_img ${isOpen ? 'isOpen' : ''}`}/>
        </button>
     </div>
     <div className={`collapse_content ${isOpen ? 'isOpen' : ''}`}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi,

        </p>
        </div>
    </div>
  );
}
export default Collapse;