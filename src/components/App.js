import React, { useState } from "react";
import youtube from "./apis/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onSearchTerm = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
		console.log("finasdfsdf", selectedVideo);
	};

	return (
		<div>
			<SearchBar searchTermSubmit={onSearchTerm} />
			<VideoDetail video={selectedVideo} />
			<VideoList onVideoSelect={onVideoSelect} videos={videos} />
		</div>
	);
};

export default App;
