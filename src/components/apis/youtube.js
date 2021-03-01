import axios from "axios";

const KEY = "AIzaSyBfhVSr6flGWWKkh8Js4Vdmk7ZOdECtf20";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
