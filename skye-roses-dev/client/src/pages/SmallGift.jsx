
import '../styles/SmallGift.css';

import NavbarComponent from '../components/NavbarComponent';
import Carousel from '../components/Carousel';

import sml from '../assets/images/sml-gift-ex.jpg';
import med from '../assets/images/gift4.jpeg';
import lrg from '../assets/images/gift1.jpeg';

const gifts = [
    { size: 'sml', img: sml, label: "sml" },
    { size: 'sml', img: sml, label: "sml" },
    { size: 'sml', img: sml, label: "sml" },
    { size: 'sml', img: sml, label: "sml" }
];

export const SmallGift = () => {
  return (
    <div>
        <div>
            <NavbarComponent />
            {/* <Carousel /> */}
        </div>
        <div className='small-gifts'>
          <div className='gifts-cont'>
            <img className='image-cont' src={sml} alt='sml img'/>
            <p>wedwed</p>
          </div>
        </div>
    </div>
  );
}

export default SmallGift;