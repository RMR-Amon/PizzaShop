import { useState } from "react";

const Authentication = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="auth__page">
      <div className={`auth ${isActive ? "active" : ""}`}>
        <div className="auth__form auth__form--signup">
          <form>
            <h1>Create Account</h1>

            <div className="auth__socials">
              <a href="#">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>

            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        <div className={`auth__form auth__form--signin ${isActive ? "hidden": ""}`}>
          <form>
            <h1>Sign In</h1>

            <div className="auth__socials">
              <a href="#">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>

            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>

        <div className="auth__toggle-wrapper">
          <div className="auth__toggle">
            <div className="auth__panel auth__panel--left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="ghost" onClick={() => setIsActive(false)}>
                Sign In
              </button>
            </div>

            <div className="auth__panel auth__panel--right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="ghost" onClick={() => setIsActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
