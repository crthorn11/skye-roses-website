import '../styles/Cart.css';
import NavbarComponent from '../components/NavbarComponent';
import { useCart } from '../CartContext';
import { useState } from 'react';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [instructions, setInstructions] = useState("");

  const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace("PRICE ", ""));
    return sum + numericPrice;
  }, 0);

  const handleCheckout = () => {
    console.log("Proceed to checkout");
    console.log("Special Instructions:", instructions);
  };

  return (
    <div className="cart-page">
      <NavbarComponent />

      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 && (
        <p className="empty-cart">Your cart is empty</p>
      )}

      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.description} className="cart-img" />

            <div className="cart-info">
              <p className="cart-desc">{item.description}</p>
              <p className="cart-price">{item.price}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <div className="instructions-box">
            <label className="instructions-label">Special Instructions (optional)</label>
            <textarea
              className="instructions-textarea"
              placeholder="Add any notes or special requests here..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>

            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;