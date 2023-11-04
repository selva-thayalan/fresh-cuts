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
import Cart from './routes/Cart';

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
      },
      {
        path:"/cart",
        element: <Cart />
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
