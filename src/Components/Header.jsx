import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div id="header">
          <h3>Where in the World?</h3>
          <p id="mode" ><i className="fa-regular fa-moon" onClick={(e) => {
            if ((e.target.className == "fa-regular fa-moon")) {
              document.querySelector("body").style.backgroundColor = 'black';
              e.target.className = "fa-solid fa-moon";
            } else {
              e.target.className = "fa-regular fa-moon";
              document.querySelector("body").style.backgroundColor = "white";
            }
            console.log(e.target.className);
          }}></i></p>
        </div>
      </header>
    </div>
  );
}

export default Header