import { useEffect, useState } from "react";
import styles from "../css/CityList.module.css";

function CountryList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCities() {
      try {
        const response = await fetch("http://localhost:9000/cities");
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getCities();
  }, []);

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
