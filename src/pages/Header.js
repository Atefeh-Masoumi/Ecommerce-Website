import './header.css'
import image from '../asset/shopp.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return ( 
    
    <div className="header">
      <div className='bgimage'>
        <img src={image} alt="bgimage" className='image'/>
      </div>
      <div className='overlay'>
        <div className='text' >
           <h1 className='txth' data-aos="zoom-in"data-aos-delay='50'data-aos-duration="600"data-aos-anchor-easing='ease-in-out' >
             {/*,   */}
             <span class="title-word title-word-1"> When the going  </span>
             <span class="title-word title-word-2">gets extreme, </span>
              <span class="title-word title-word-3">the intense </span>
              <span class="title-word title-word-4"> go shopping!</span>
             </h1>
          
          <button className='header_btn'>Shop Now!</button>
        </div>
        
      </div>

    </div>
   );
}
 
export default Header;