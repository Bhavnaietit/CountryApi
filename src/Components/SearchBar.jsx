import React from 'react'

const SearchBar = ({ handleSearchBar }) => {
	return (
		<div id='search'>
			<div id="searchBar">
				<input type="text" placeholder="Find your country!.." onChange={handleSearchBar}></input>
				<button>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
};

export default SearchBar