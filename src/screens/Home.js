import Pizza from "components/Pizza";

import "styles/Home.style.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPizzas } from "actions/pizza.action";
import { useSelector } from "react-redux";
import Spinner from "components/Spinner";
import Error from "components/Error";

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
          <div className="text-center">
            <Spinner splash="Loading.." />
          </div>
        ) : error ? (
          <div className="text-center">
            <Error />
          </div>
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
