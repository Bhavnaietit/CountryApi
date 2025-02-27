import React from "react";

const MenuBar = ({ handleMenuBar }) => {
	return (
		<div id="region">
			<select name="region" id="regionSelect" onChange={handleMenuBar}>
				<option value="" hidden>
					All
				</option>
				<option value="">All</option>
				<option value="Americas">Americas</option>
				<option value="Europe">Europe</option>
				<option value="Oceania"> Oceania</option>
				<option value="Asia">Asia</option>
				<option value="Africa">Africa</option>
				<option value="Antarctic">Antarctic</option>
			</select>
		</div>
	);
};

export default MenuBar;
