import React from "react";

import "./VideoItem.scss";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		// <div className="video-item" onClick={() => onVideoSelect(video)}>
		// 	<div className="video-item__img">
		// 		<img
		// 			src={video.snippet.thumbnails.medium.url}
		// 			alt={video.snippet.description}
		// 		/>
		// 	</div>
		// 	<div className="video-item__content">
		// 		<h2 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h2>
		// 	</div>
		// </div>

		<div className="video-item" onClick={() => onVideoSelect(video)}>
			<ul>
				<li>
					{/* <div className="video-item__img col-1-of-2"> */}
					<div className="video-item__img">
						<img
							src={video.snippet.thumbnails.medium.url}
							alt={video.snippet.description}
						/>
					</div>
					<div className="video-item__content">
						<h2 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h2>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default VideoItem;
