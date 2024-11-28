import React, { useEffect, useState } from "react";
import "./Navigation.css";
import axios from '../utils/axios.js';

const NavigationBar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Helper function to check for the presence of the JWT token in cookies
	const isTokenInCookies = async () => {

		try {
			const response = await axios.get("/auth/status"); 
			setIsLoggedIn(response.data.code === 200 ? true : false); 
		} catch (error) {
			console.error("Error checking login status:", error);
			setIsLoggedIn(false);
		}
	};

	useEffect(() => {
		// Check for JWT token in cookies and update login state
		setIsLoggedIn(isTokenInCookies());
	}, []);

	const handleLogout = async () => {
		try {
			// Send logout request to the backend
			const response = await axios.get("/auth/logout");
			if(response.data.code === 200) {
				setIsLoggedIn(false);
				window.location.reload()
			}
		} catch (error) {
			console.error("Error during logout:", error);
		}

	};

	return (
		<>
			<div className="navigation-bar">
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img src="/my-fitness-logo.png" alt="brand-logo" />
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
									<a className="nav-link active" aria-current="page" href="/about">
										<b>About Us</b>
									</a>
								</li>
								<li className="nav-item dropdown">
									<p
										className="nav-link dropdown-toggle"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<b>Features</b>
									</p>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="/exercise">
												Exercise
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/whealth">
												Women Health
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/yoga">
												Yoga
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/todo">
												To-Do List
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/bmi">
												BMI
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/calorie">
												Calorie Tracker
											</a>
										</li>
									</ul>
								</li>
							</ul>
							{isLoggedIn ? (
								<a
									className="nav-item login"
									aria-current="page"
									onClick={handleLogout}
									href="/"
								>
									<b>Logout</b>
								</a>
							) : (
								<a className="nav-item login" aria-current="page" href="/login">
									<b>Login</b>
								</a>
							)}
						</div>
					</div>
				</nav>
			</div>
			<div className="MainPageContent"></div>
		</>
	);
};

export default NavigationBar;
