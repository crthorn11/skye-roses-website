import '../styles/SmallGift.css';

import NavbarComponent from '../components/NavbarComponent';

import { useCart } from '../CartContext';   // <-- import cart hook

import gift1 from '../assets/images/sml-gift-ex.jpg';
import gift2 from '../assets/images/gift4.jpeg';
import gift3 from '../assets/images/gift1.jpeg';

import gift4 from '../assets/images/sml-gift-ex.jpg';
import gift5 from '../assets/images/sml-gift-ex.jpg';
import gift6 from '../assets/images/gift1.jpeg';
import gift7 from '../assets/images/gift1.jpeg';
import gift8 from '../assets/images/gift1.jpeg';

const gifts = [
    { id: 1, img: gift1, price: 'PRICE 50.00', description: 'Small Gift with 7 sweets' },
    { id: 2, img: gift2, price: 'PRICE 80.00', description: 'Small gift with extra sweet' },
    { id: 3, img: gift3, price: 'PRICE 95.00', description: 'Big gift special' },
    { id: 4, img: gift4, price: 'PRICE 95.00', description: 'Big gift special' },
    { id: 5, img: gift5, price: 'PRICE 95.00', description: 'Big gift special' },
    { id: 6, img: gift6, price: 'PRICE 95.00', description: 'Big gift special' },
    { id: 7, img: gift7, price: 'PRICE 95.00', description: 'Big gift special' },
    { id: 8, img: gift8, price: 'PRICE 95.00', description: 'Big gift special' },
];

export const MediumGift = () => {
  const { addToCart } = useCart();   // <-- get addToCart

  return (
    <div>
      <NavbarComponent />

      <div className='small-gifts'>
        {gifts.map((gift) => (
          <div key={gift.id} className='product-cards'>
            <div className='product-card'>
              <img className='image-cont' src={gift.img} alt={gift.description} />
              <p className='price'>{gift.price}</p>
              <p className='description'>{gift.description}</p>
              
              <button 
                className="add-btn"
                onClick={() => addToCart(gift)}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediumGift;