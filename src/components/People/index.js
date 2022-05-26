import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "./style.css";

const People = ({ apiResponse }) => {
  return (
    <div>
      people
      {apiResponse?.results?.map((person) => {
        return (
          <div key={person.name}>
            <h2>{person.name}</h2>
            <h3>{person.hair_color}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default People;
