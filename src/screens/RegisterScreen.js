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
      <div
        className="register-screen p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "700px", margin: "auto" }}
      >
        <form className="my-5" onSubmit={handleSubmit}>
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

      <style jsx>
        {`
          .register-screen {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </div>
  );
};

export default RegisterScreen;
