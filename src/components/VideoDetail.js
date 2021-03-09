import React from "react";

import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	} else {
		const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
		return (
			<div className="video-detail-wrapper">
				<div className="iframe-wrapper">
					<iframe
						title="video player"
						src={videoSrc}
						allowFullScreen="allowfullscreen"></iframe>
				</div>
				<div className="video-detail-content">
					<h1 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h1>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
	}
};

export default VideoDetail;
