import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	} else {
		const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
		return (
			<div>
				<div>
					<iframe title="video player" src={videoSrc}></iframe>
					<h3>{video.snippet.title}</h3>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
	}
};

export default VideoDetail;
