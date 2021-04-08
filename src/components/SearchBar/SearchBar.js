import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.scss";

const SearchBar = ({ searchTermSubmit }) => {
	const [term, setTerm] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		searchTermSubmit(term);
	};

	return (
		<div className="search">
			<form className="form" onSubmit={onSubmit}>
				<div className="form__search-bar">
					<input
						type="text"
						value={term}
						placeholder="Search"
						onChange={(e) => setTerm(e.target.value)}
					/>
					<FaSearch className="form__search-icon" onClick={onSubmit} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;

// .form{
//   /* padding-top: 1rem;
//   padding-bottom:1rem;
//   height:100%; */
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// }

// .search-bar {
//   min-width:100%;
//   /* height:100%; */
//   /* height:50px;
//   width:500px; */
//   display:flex;
//   align-items: center;
//   /* justify-content: center; */
// }

// /* .search-bar input {
//   width:100%;
//   border-radius: 8px;
//   line-height: 30px;
//   padding-left:6px;
// } */
// /* .search-bar input {
//   width:100%;
//   border-radius: 8px;
//   line-height: 30px;
//   padding-left:6px;
// } */

// /* #search-icon {
//   position:absolute;
// } */
