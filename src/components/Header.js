import React from 'react';
import { Link } from 'react-router-dom'
//  can add checked inside of input to have it default to checked

const Header = () => {

  return (
    <div>
      <div>
        <Link to ='/home'>Home</Link>
        <Link to ='/about'>About</Link>
      </div>

      {/* <label for="data">Choose Data To Display:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}

      {/* <div>
        <label for="data">Choose Data To Dipslay:</label>
        <input type="checkbox" id="CitySize" name="CitySize" value="CitySize"></input>
        <label for="CitySize">City Size</label><br></br>
      </div> */}
    </div>

  );
};

export default Header;