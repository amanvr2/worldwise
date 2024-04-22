import { createContext,useContext,useEffect, useState } from "react";


const CitiesContext = createContext();

function CityProvider({children}){
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

    return <CitiesContext.Provider value={{cities}}>{children}</CitiesContext.Provider>

}

function useCities(){

    const context = useContext(CitiesContext);
    return context;
}

export {CityProvider, useCities}