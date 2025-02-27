import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import  styles from "./Country.module.css";
import { ShimmerCountry } from "./ShimmerCountry";

const Country = () => {
	
	// const [countryDetail, setCountryDetail] = useState(null);
	// const param = useParams();
	// //  const [borders, setBorders] = useState([]);
	// const countryName = param.country;
	// console.log(countryName);
	// useEffect(() => {
	// 	fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
	// 		.then((res) => res.json())
	// 		.then((country) => {
        // setCountryDetail({
        //   name: country.name.common,
        //   img: country.flags.svg,
        //   population: country.population.toLocaleString('en-IN'),
        //   region: country.region,
        //   capital: country.capital,
        //   languages: Object.values(country.languages).join(', '),
        //   borders:[]
        // });
        // Promise.all(country.borders.map((border) => {
        //   return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //     .then((res) => res.json())
        //     .then(([borderCountry]) => borderCountry.name.common);
        // })
        // ).then((borders) => {
        //   setCountryDetail((prev)=>({...prev,borders}))
        //   console.log(borders)
				// })
	// 			console.log(country)
          
	// 		});
	// }, [countryName]);
	

	return countryDetail == null ? (<ShimmerCountry />) : (
		<div>
			<main>
				<div
					// className={styles.countriesConatainer}
				>
					<img src={countryDetail.img} alt="flag"></img>
					<div id="textInfo">
						<div id="info">
							<b>
								Name: <span id="name">{countryDetail.name}</span>
							</b>
							<b>
								Population:{" "}
								<span id="population">{countryDetail.population}</span>
							</b>
							<b>
								Languages: <span id="languages">{countryDetail.languages}</span>
							</b>
							<b>
								Region: <span id="region">{countryDetail.region}</span>
							</b>
							<b>
								Capital: <span id="capital">{countryDetail.capital}</span>
							</b>
						{countryDetail.borders != undefined && (
							<div>
								<b>Borders:</b>
									<div
										// className={styles.border}
									>
									{countryDetail.borders.map((border) => (
										 <Link
											// className={styles.countryBtn}
											key={border}
											to={`/${border}`}>
											{border}
										 </Link>
									
									))}
								</div>
							</div>
              )}
               </div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Country;
