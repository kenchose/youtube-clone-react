import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="video-item-wrapper" onClick={() => onVideoSelect(video)}>
			<div className="video-img">
				<img
					className="video-img"
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.description}
				/>
			</div>
			<div className="video-item-content">
				<h1 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h1>
			</div>
		</div>
	);
};

export default VideoItem;
