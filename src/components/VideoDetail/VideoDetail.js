import React from "react";

import "./VideoDetail.scss";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	} else {
		const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
		return (
			<div className="video-detail">
				<div className="iframe">
					<iframe
						title="video player"
						src={videoSrc}
						allowFullScreen="allowfullscreen"></iframe>
				</div>
				<div className="video-detail__content">
					<h3 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h3>
					<p className="video-detail__content-text">
						{video.snippet.description}
					</p>
				</div>
			</div>
		);
	}
};

export default VideoDetail;
