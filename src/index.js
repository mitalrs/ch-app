import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './routes.js';
import { RouterProvider } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

