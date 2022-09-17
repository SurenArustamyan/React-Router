import { Link } from "react-router-dom";
import "./style.css";

function Cars({ data }) {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="name" key={item.id}>
            <Link to={`/car/${item.id}`} className="my-link">
              Car Name: {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
