import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import "./Yoga.css";
import axios from '../../utils/axios.js';


function YogaGuide() {
	const [yogaData, setYogaData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/yoga');
				setYogaData(response.data.data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [])

	if (!yogaData) {
		return (
			<>
				<section id="banner-title-container">
					<div class="title">Yoga Guide</div>
					{/* <div class="sub-title"></div> */}
				</section>

				<section style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
					<TailSpin
						height="50"
						width="50"
						color="#00aeef"
						ariaLabel="tail-spin-loading"
						radius="5"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</section>
			</>
		)
	}

	const openVideo = (videoUrl) => {
		window.open(videoUrl, "_blank");
	};

	return (
		<>
			<section id="banner-title-container">
				<div class="title">Yoga Guide</div>
				{/* <div class="sub-title"></div> */}
			</section>
			<div className="yoga-guide">
				<div className="yoga-poses">
					{yogaData.map((pose) => (
						<div key={pose.id} className="yoga-pose">
							<h3>{pose.name}</h3>
							<div className="yoga-image-container">
								<img src={pose.imageUrl} alt={`${pose.name} pose`} />
							</div>
							<p>{pose.description}</p>
							<button onClick={() => openVideo(pose.videoUrl)}>Watch Video</button>
						</div>
					))}
				</div>
			</div>

		</>
	);
}

export default YogaGuide;