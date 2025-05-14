import { useState, React } from "react";
import "./Login.css";
import {
  LOGIN_CONSTANT,
  PASSWORD_CONSTANT,
  USERNAME_CONSTANT,
  SUBMIT_CONSTANT,
  CONTINUE_CONSTANT,
} from "../constants";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { userData } from "./LoginData.tsx";
function Login() {
  const [formData, setFormData] = useState(userData);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    console.log(formData);
  };
  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login-form">
          <div className="login-text">
            <h2>{LOGIN_CONSTANT}</h2>
          </div>
          <form
            className="needs-validation"
            onSubmit={(e) => {
              handleSubmit(e);
            }}>
            <div className="form-group mb-2">
              <label htmlFor="username" className="username form-label">
                {USERNAME_CONSTANT}
              </label>
              <Input
                type="text"
                placeholder={USERNAME_CONSTANT}
                onKeyDown={(e) => e.key === " " && e.preventDefault()}
                onChange={(e) => {
                  setFormData((data) => ({
                    ...data,
                    username: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="password" className="password form-label">
                {PASSWORD_CONSTANT}
              </label>
              <Input.Password
                type="password"
                placeholder={PASSWORD_CONSTANT}
                onChange={(e) => {
                  setFormData((data) => ({
                    ...data,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            <button
              className="submit btn btn-dark mx-auto d-block w-75"
              type="submit">
              {SUBMIT_CONSTANT}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
