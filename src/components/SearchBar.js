import React, { useState } from "react";

const SearchBar = ({ searchTermSubmit }) => {
	const [term, setTerm] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		searchTermSubmit(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label>Video Search</label>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
