// import Login from "./Component/Login.js";
import "./App.css";

function App() {
	return (
		<>
			<div className="home-page-main-container">

				<div className="homepage-landing">
					{/* <div class="se-shape">
					</div> */}
					{/* <h5>No Excuses</h5> */}
					
					<img id="landing-logo" src="/My-Fitness-Long-Logo-alt.png" alt="banner-image"></img>
					<img id="landing-img" src="/Landing-page-banner-stroke.png" alt="banner-image"></img>
					<a href="/login">Join Now</a>
				</div>

				{/* Why Choose Us Section */}
				<section class="bg-01" id="about-us">
					<div class="container li-001">
						{/* <div class="se-shape">
						</div> */}
						<div class="row main-wrapper">
							<div class="col-12">
								<div class="heading">
									<span>why</span>
									<h2>Choose Us</h2>
								</div>
								<div class="content">
									<p>At <b>My Fitness</b>, we offer a comprehensive platform to elevate your wellness journey. 
										Track your workouts, explore yoga routines, manage calories, calculate BMI, and monitor women's health - 
										all in one place. With an added to-do list for seamless planning, My Fitness makes achieving your health 
										goals effortless and enjoyable. Start your transformation today!
									</p>
									
								</div>

								<div class="use-icons">
									<ol>
										<li>
											<span class="flaticon-relationship"></span>
											<h5>Happy Clients</h5>
											<h3>1000&nbsp;+</h3>
										</li>
										<li>
											<span class="flaticon-bike"></span>
											<h5>Best</h5>
											<h3>Trainner</h3>
										</li>
										<li>
											<span class="flaticon-stationary-bike"></span>
											<h5>Standard</h5>
											<h3>Equipment</h3>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="bg-se-01">
					<div class="container li-001">
						{/* <div class="se-shape">
						</div> */}
						<div class="row main-wrapper">
							<div class="col-12">
								<div class="heading">
									<h2>Our features</h2>
									<p>Explore a range of features designed to support your health and fitness journey. From personalized exercise plans to tools for tracking your nutrition and well-being, My Fitness provides everything you need to stay motivated and achieve your goals. With dedicated modules for yoga, calorie tracking, women's health, and more, we make fitness simple and effective for everyone.</p>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="wrapper">
									<div class="content">
										<div class="icons">
											<span class="flaticon-dumbbell"></span>
										</div>
										<h3>Calorie Tracker</h3>
										<p>Easily track your daily calorie intake and stay in control of your nutrition to meet your fitness goals.</p>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="wrapper">
									<div class="content">
										<div class="icons">
											<span class="flaticon-hearth"></span>
										</div>
										<h3>Women Health</h3>
										<p>Comprehensive tools to monitor and manage women's health, including cycles, wellness insights, and more.</p>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="wrapper">
									<div class="content">
										<div class="icons">
											<span class="flaticon-exercise"></span>
										</div>
										<h3>Exercises</h3>
										<p>Access a wide range of effective exercise modules tailored to help you achieve your fitness goals.</p>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<div class="wrapper">
									<div class="content">
										<div class="icons">
											<span class="flaticon-fitness"></span>
										</div>
										<h3>Yoga</h3>
										<p>Discover soothing yoga routines to improve flexibility, reduce stress, and boost overall well-being.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
            	</section>

				<section className="final-banner">
					<div className="banner">
						<div className="banner-content">
							<h1>Achieve Your Fitness Goals Today!!</h1>
							<p>
							Sign up now and <span className="highlight">Start</span> on your new journey!
							</p>
							<a href="/login" className="cta-button">Join Now</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
