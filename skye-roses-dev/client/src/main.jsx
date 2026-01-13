import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import '../src/index.css';

import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';


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
          path: '',
          element: <NavbarComponent />,
        },
        ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );