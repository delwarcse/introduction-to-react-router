import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import ReactDOM from "react-dom/client";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
children:[
  {
    path:'/about',
  element: <About></About>,
},
  {
    path:'/contact',
  element: <Contact></Contact>,
},
]
  },
 
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);