import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Overview from './pages/overview/Overview';
import Contact from './pages/contacts/Contact';
import Favorite from './pages/favorites/Favorite';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
