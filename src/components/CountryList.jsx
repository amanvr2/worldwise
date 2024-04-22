import { useEffect, useState } from "react";
import styles from "../css/CityList.module.css";
import { useCities } from "../contexts/CityContext";

function CountryList() {

  const {cities} = useCities();
  const countries = [];
  cities.forEach((city) => {
    if (!countries.includes(city.country)) {
      countries.push(city.country);
    }
  });

  return (
    <>
      <ul className={styles.cityList}>
        {countries.map((country) => (
          <div className="country" key={country}>
            {country}
          </div>
        ))}
      </ul>
    </>
  );
}

export default CountryList;
