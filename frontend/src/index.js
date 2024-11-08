import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './Pages/About Us/AboutUs.js';
import Login from './Components/Login.js';
import Calorie from './Pages/Calorie/Calorie.js';
import BMI from './Pages/BMI/BMI.js';
import WHealth from './Pages/Women Health/WHealth.js';
import ToDo from './Pages/To-Do/ToDo.js';
import Yoga from './Pages/Yoga/Yoga.js';
import Exercise from "./Pages/Exercise/Exercise.js";

import NavigationBar from "./Components/NavigationBar.js";
import Footer from "./Components/Footer.js"


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/bmi",
    element: <BMI/>,
  },
  {
    path: "/yoga",
    element: <Yoga/>,
  },
  {
    path: "/calorie",
    element: <Calorie/>,
  },
  {
    path: "/whealth",
    element: <WHealth/>,
  },
  {
    path: "/exercise",
    element: <Exercise/>,
  },
  {
    path: "/todo",
    element: <ToDo/>,
  },
  

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavigationBar />
    <RouterProvider router={router}/>
    <Footer />
  
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
