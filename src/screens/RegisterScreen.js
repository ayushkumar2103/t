import { registerUser } from "actions/register.action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/RegisterScreen.style.css";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (credentials.password.length < 6) {
      toast.error("password must be greater than 6 characters");
      return;
    }

    const user = {
      name: credentials.fullName,
      email: credentials.email,
      password: credentials.password,
    };
    dispatch(registerUser(user));
  };

  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <div className="row justify-content-center">
        <form className="col-md-5 mt-5" onSubmit={handleSubmit}>
          <h2>Register Account</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={credentials.fullName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={credentials.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <button className="btn btn-danger" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
