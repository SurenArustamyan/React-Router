import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./style.css";

function Car() {
  let { id } = useParams();
  const [state, setState] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/cars/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data[0]);
        return data;
      });
  }, [id]);
  return (
    <div className="list">
      <h2>Car Name: {state.name}</h2>
      <h2>Car Color: {state.color}</h2>
      <h2>Car Year: {state.year}</h2>
      <h2>Car Id: {state.id}</h2>
    </div>
  );
}

export default Car;
