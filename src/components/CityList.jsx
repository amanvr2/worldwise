import { useEffect, useState } from "react";
import styles from "../css/CityList.module.css";
import { Link } from "react-router-dom";

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
