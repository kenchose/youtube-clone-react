import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="video-item">
			<img
				onClick={() => onVideoSelect(video)}
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className="video-content">
				<h3>{video.snippet.title}</h3>
			</div>
		</div>
	);
};

export default VideoItem;
