// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import axios from "axios";

function App() {
  const [apiResponse, setApiResponse] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    search: "",
    type: "people",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://swapi.dev/api/${formData.type}/?search=${formData.search}`
      );
      setApiResponse(response.data);
      navigate(`/${formData.type}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home handleSubmit={handleSubmit} handleChange={handleChange} />
          }
        ></Route>
        <Route
          path="/people"
          element={<People apiResponse={apiResponse} />}
        ></Route>
        <Route
          path="/planets"
          element={<Planets apiResponse={apiResponse} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
// 1. use useNavigate() to navigate to the /people page in your handleSubmit function
// 2. display some of the data contained within the apiResponse variable on your Person component.
