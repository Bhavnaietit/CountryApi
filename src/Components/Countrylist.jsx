import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import ShimmerHome from './ShimmerHome';

const Countrylist = ({ name, region }) => {
	const [countriesData, setCountriesData] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => {
				setCountriesData(data);
			});
	}, []);
	console.log(countriesData);
	let countries = [];
	if (countriesData.length != 0) {
		countries = countriesData.map((country) => {
			console.log(country);
            return (
                (name == "" || country.name.common.toLowerCase().includes(name)) &&
                (region=="" || country.region==region)&&(
								<CountryCard
									key={country.name.common}
									name={country.name.common}
									img={country.flags.svg}
									population={country.population}
									capital={country.capital}
									region={country.region}
								/>
							)
						);
		});
	}

	console.log(countries.length)
	return countries.length==0?<ShimmerHome/>: <div className="countries-conatainer">{countries}</div>;
}

export default Countrylist