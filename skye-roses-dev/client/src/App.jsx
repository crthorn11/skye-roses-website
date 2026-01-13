import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

{
  /* The following line can be included in your src/index.js or App.js file */
}

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;