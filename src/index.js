import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QrPage from './routes/qrpage.pages';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreditsPage from './routes/credits';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/qr-generator",
    element: <QrPage />,
  },
  {
    path: "/credits",
    element: <CreditsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
