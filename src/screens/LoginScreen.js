import { useState } from "react";
import "styles/RegisterScreen.style.css";

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-5 mt-5" onSubmit={handleSubmit}>
          <h2>Login Account</h2>
          <input
            type="email"
            name="email"
            placeholder="abc@example.com"
            value={credentials.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />

          <button className="btn btn-danger" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
