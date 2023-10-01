import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/common.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Menu, { menuLoader } from './routes/Menu';
import CartProvider from './context/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Menu />,
        loader: menuLoader,
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
