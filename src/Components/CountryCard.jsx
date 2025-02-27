import React from "react";
import { Link } from "react-router";

const CountryCard = ({ img, name, population, capital, region }) => {
	console.log(img,name)
	// debugger
	return (
		<a href={`/${name}`}>
			<div className="country">
				<div className="img">
					<img src={img} alt="flag"></img>
				</div>
				<div id="info">
					<b>
						<p>{name}</p>
					</b>
					<b>
						Population: <span>{population}</span>
					</b>
					<b>
						Capital: <span>{capital}</span>
					</b>
					<b>
						Region: <span>{region}</span>
					</b>
				</div>
			</div>
			</a>
	);
};

export default CountryCard;
