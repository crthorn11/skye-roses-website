import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import '../src/index.css';

import HomePage from './pages/HomePage';

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
          path: 'dev',
          element: <Carousel />,
        },
        ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );