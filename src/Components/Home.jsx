import React, { useState } from 'react'
import Countrylist from './Countrylist'
import MenuBar from './MenuBar'
import Header from './Header'
import SearchBar from './SearchBar'

const Home = () => {
  
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
     console.log(name,region)
    function handleSearchBar(e) {
      setName(e.target.value);
    }
  function handleMenuBar(e) {
    setRegion(e.target.value);
    }
  return (
		<div>
			<div id="header2">
				<SearchBar handleSearchBar={handleSearchBar} />
				<MenuBar handleMenuBar={handleMenuBar} />
			</div>
			<div>
				<Countrylist name={name} region={region}></Countrylist>
			</div> 
		</div>
	);
}

export default Home