import React from "react";
import "./Login.css";
import {
  LOGIN_CONSTANT,
  PASSWORD_CONSTANT,
  USERNAME_CONSTANT,
  SUBMIT_CONSTANT,
} from "../constants";
import { Input } from "antd";

function Login() {
  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login-form">
          <div className="login-text">
            <h2>{LOGIN_CONSTANT}</h2>
          </div>
          <form className="needs-validation">
            <div className="form-group mb-2">
              <label htmlFor="username" className="username form-label">
                {USERNAME_CONSTANT}
              </label>
              <Input
                type="text"
                placeholder={USERNAME_CONSTANT}
                required
                onKeyDown={(e) => e.key === " " && e.preventDefault()}
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="password" className="password form-label">
                {PASSWORD_CONSTANT}
              </label>
              <Input.Password
                type="password"
                placeholder={PASSWORD_CONSTANT}
                required
              />
            </div>
            <button className="submit btn btn-dark mx-auto d-block w-75">
              {SUBMIT_CONSTANT}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
