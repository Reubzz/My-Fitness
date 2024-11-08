import React from "react";
// import { Link } from "react-router-dom";
import "./Navigation.css";
//import App from '../App';

// import Cover_image1 from '../Component/Assets/Cover.png'

const NavigationBar = () => {
  return (
    <>
      <div className="bg">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/my-fitness-logo.png" alt="brand-logo"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/about"
                  >
                    <b>About Us</b>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Features</b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/exercise">
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/whealth">
                        Women Health
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="/yoga">
                        Yoga
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/todo">
                        To-Do List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/bmi">
                        BMI{" "}
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="/calorie">
                        Calorie Tracker
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                </li> */}
              </ul>
              <a className="nav-item login" aria-current="page" href="/login">
                <b>Login</b>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="MainPageContent"></div>
    </>
  );
};

export default NavigationBar;
