import React, { useState } from 'react';
import Front from './components/Front';
import OpenendCard from './components/OpenedCard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  const [frontVisible, setfrontVisible] = useState(true);

  const handleButtonClick = () => {
    setfrontVisible(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          {frontVisible && <Front onClick={handleButtonClick} />}
          {!frontVisible && <OpenendCard />}
        </div>
      ),
    },
    {
      path: '/:eventId',
      element: (
        <div>
          {frontVisible && <Front onClick={handleButtonClick} />}
          {!frontVisible && <OpenendCard />}
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
