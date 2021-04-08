import React, { useState, useEffect } from "react";
import "./App.scss";
import youtube from "../apis/youtube";

import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onSearchTerm("rock climbing");
	}, []);

	const onSearchTerm = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="wrapper">
			<SearchBar searchTermSubmit={onSearchTerm} />
			<div className="row" style={{ maxWidth: "100%" }}>
				<div className="col-2-of-3">
					<VideoDetail video={selectedVideo} />
				</div>
				<div>
					<VideoList onVideoSelect={onVideoSelect} videos={videos} />
				</div>
			</div>
		</div>
	);
	// return (
	// 	<div className="wrapper">
	// 		<SearchBar searchTermSubmit={onSearchTerm} />
	// 		<VideoDetail video={selectedVideo} />
	// 		<VideoList onVideoSelect={onVideoSelect} videos={videos} />
	// 	</div>
	// );
};

export default App;
