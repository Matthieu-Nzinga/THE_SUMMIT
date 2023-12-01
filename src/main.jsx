import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TheSummit from './pages/TheSummit.jsx'
import TheLodge from './pages/TheLodge.jsx'
import OurSkiRuns from './pages/OurSkiRuns.jsx'
import HowToGetHere from './pages/HowToGetHere.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <TheSummit/>
  },
  {
    path:'/lodge',
    element: <TheLodge/>
  },
  {
    path:'/ourskin',
    element: <OurSkiRuns/>
  },
  {
    path:'/howto',
    element: <HowToGetHere/>
  },
  {
    path:'/contact',
    element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
