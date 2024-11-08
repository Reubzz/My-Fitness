import React from "react";
import yogaData from "./yogaData";
import "./Yoga.css";

function YogaGuide() {
  const openVideo = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="yoga-guide">
      <h2>Yoga Guide</h2>
      <div className="yoga-poses">
        {yogaData.map((pose) => (
          <div key={pose.id} className="yoga-pose">
            <h3>{pose.name}</h3>
            <p>{pose.description}</p>
            <img src={pose.gif} alt={`${pose.name} pose`} />
            <button onClick={() => openVideo(pose.video)}>Watch Video</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YogaGuide;