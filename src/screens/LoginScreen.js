import { loginUser } from "actions/login.action";
import Error from "components/Error";
import Spinner from "components/Spinner";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "styles/RegisterScreen.style.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.loginReducer);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("enter all the fields!");
      return;
    }

    const result = await dispatch(loginUser(credentials));
    if (result) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      {loading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div
            className="shadow p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "700px", margin: "auto" }}
          >
            {error && <Error error={error} />}
            <form className="my-5" onSubmit={handleSubmit}>
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
        </>
      )}
    </div>
  );
};

export default LoginScreen;
