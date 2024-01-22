import React from 'react';
import chevron from "../assets/chevron.png"
function Collapse() {
  return (
    <div className="collapse">
     <div className='collapse_header'>
        <p className='collapse_title'>Title</p>
        <img src={chevron} alt='chevron-img' className='chevron_img'/>
     </div>
     <div className='collapse_content'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga pariatur itaque iste porro nisi, facilis odit aut maiores, tempore magni iure atque voluptatem minus eum nihil quis eius fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet, ex est ullam repudiandae voluptates, totam quia quibusdam hic nesciunt dolorum! Illo excepturi, voluptate sint iure quis facilis! Magni, corporis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maiores exercitationem nihil excepturi neque tempore, optio quasi voluptatum voluptatibus nemo numquam nostrum laborum, dolorem dolorum voluptate commodi in doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque asperiores ut dolorum et ex accusamus iure dolores pariatur blanditiis ipsum, libero facilis sequi tenetur esse animi illum, nostrum earum non?</div>
    </div>
  );
}
export default Collapse;