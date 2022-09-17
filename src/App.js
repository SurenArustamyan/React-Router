import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/cars-home";
import Car from "./components/car-details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data);
        return data;
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header data={state} />}></Route>
          <Route path="/car/:id" element={<Car />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
