import { useEffect, useState } from "react";
import styles from "../css/CityList.module.css";

function CityList() {
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
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city)=>(
            <li>{city.cityName}</li>
        ))}
      </ul>
    </>
  );
}

export default CityList;
