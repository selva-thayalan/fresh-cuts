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
    <RouterProvider router={router} />
  </React.StrictMode>
);
