import Pizza from "components/Pizza";
import pizzas from "../pizzadata";

import "styles/Home.style.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="container">
        <div className="pizza-row">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
