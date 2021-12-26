import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";

import HomeScreen from "screens/Home";
import CartScreen from "screens/CartScreen";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </div>
  );
}

export default App;
