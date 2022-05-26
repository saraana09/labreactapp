import React from "react";
// import axios from "axios";

const Home = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search">Search People:</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={props.handleChange}
        />
        <select id="type" name="type" onChange={props.handleChange}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="films">Films</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
