import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";

import HomeScreen from "screens/Home";
import LoginScreen from "screens/LoginScreen";
import RegisterScreen from "screens/RegisterScreen";
import CartScreen from "screens/CartScreen";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </div>
  );
}

export default App;
