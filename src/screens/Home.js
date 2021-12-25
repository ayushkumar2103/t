import Pizza from "components/Pizza";

import "styles/Home.style.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPizzas } from "actions/pizza.action";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="home-screen">
      <div className="container">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>Something went wrong...</h3>
        ) : (
          <div className="pizza-row">
            {pizzas?.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
