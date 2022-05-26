import axios from "axios";
import React, { useState, useEffect } from "react";

const Planets = ({ apiResponse }) => {
  console.log(apiResponse);
  const [resNames, setResNames] = useState("");

  const showData = async () => {
    const showResidents = async (resident) => {
      const responses = await resident.map((res) => {
        return axios.get(res);
      });
      const values = await Promise.all(responses);
      const names = values.map((value) => {
        return value.data.name;
      });
      console.log(values);
      return names;
    };
    const renderedData = apiResponse?.results?.map((planet) => {
      return (
        <div key={planet.name}>
          <h2>
            {planet.name} 's population is {planet.population}
          </h2>
          <h3>It's climate knowm as {planet.climate}</h3>
          <p>
            Residents are
            {showResidents(planet.residents)}
          </p>
        </div>
      );
    });
    setResNames(renderedData);
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      Planets
      {resNames}
    </div>
  );
};

export default Planets;
