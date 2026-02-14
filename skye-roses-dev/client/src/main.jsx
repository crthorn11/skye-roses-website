import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import '../src/index.css';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SmallGift from './pages/SmallGift';

import { Carousel } from './components/Carousel';
// import carouselImages from "./carouselImages";


const router = createBrowserRouter([
{
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
 {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'Homepage',
          element: <HomePage />,
        },
        {
          path: 'ContactPage',
          element: <ContactPage />,
        },
        {
          path: 'dev',
          element: <SmallGift />,
        },
        // {
        //   path: '0',
        //   element: <MedGift />,
        // },
        // {
        //   path: '1',
        //   element: <LrgGift />,
        // },
        ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );