import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import SmallGift from './pages/SmallGift';
import MediumGift from './pages/MediumGift';
import LargeGift from './pages/LargeGift';

import Cart from './pages/Cart';

import { CartProvider } from './CartContext'; 

import Error from './pages/Error';

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'Homepage', element: <HomePage /> },
      { path: 'ContactPage', element: <ContactPage /> },
      { path: 'SmallGifts', element: <SmallGift /> },
      { path: 'MediumGift', element: <MediumGift /> },
      { path: 'LargeGift', element: <LargeGift /> },
      { path: 'Cart', element: <Cart /> },
    ],
  },
]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );