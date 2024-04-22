import { useEffect, useState, useContext } from "react";
import styles from "../css/CityList.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CityContext";

function CityList() {

  const {cities} = useCities();


  function deleteCity(id) {
    const newData = cities.filter((city) => city.id !== id);
    setCities(newData);
  }
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} key={city.id}>
            <div className="city" >
              <li>{city.cityName}</li>
              <button onClick={() => deleteCity(city.id)}>&times;</button>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default CityList;
