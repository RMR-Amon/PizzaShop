import { useEffect, useState } from "react";
import google from "../assets/images/login_google.svg";
import facebook from "../assets/images/login_facebook.svg";
import github from "../assets/images/login_github.svg";
import linkedin from "../assets/images/login_linkedin.svg";
import axios from "axios";
import { useNavigate } from "react-router";

interface IUsers_Data {
  id: number;
  name: string;
  email: string;
  password: string;
}

const Authentication = () => {
  const [data, setData] = useState<IUsers_Data[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<IUsers_Data[]>(
          "https://69896f24c04d974bc69f3b4c.mockapi.io/Users_data",
        );

        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email, password };
    if (name != "" && password != "" && email != "") {
      axios.post(
        "https://69896f24c04d974bc69f3b4c.mockapi.io/Users_data",
        user,
      );
      navigate("/");
    }
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = data.find(
      (person) =>
        person.email.toLowerCase() === email.toLowerCase() &&
        person.password === password,
    );

    if (user) {
      navigate("/");
    } else {
      alert("User not found");
    }
    return;
  };

  return (
    <div className="auth__page">
      <div className={`auth ${isActive ? "active" : ""}`}>
        <div className="auth__form auth__form--signup">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>

            <div className="auth__socials">
              <a href="#login">
                <img src={google} alt="" />
              </a>
              <a href="#login">
                <img src={facebook} alt="" />
              </a>
              <a href="#login">
                <img src={github} alt="" />
              </a>
              <a href="#login">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div
          className={`auth__form auth__form--signin ${isActive ? "hidden" : ""}`}
        >
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>

            <div className="auth__socials">
              <a href="#login">
                <img src={google} alt="" />
              </a>
              <a href="#login">
                <img src={facebook} alt="" />
              </a>
              <a href="#login">
                <img src={github} alt="" />
              </a>
              <a href="#login">
                <img src={linkedin} alt="" />
              </a>
            </div>

            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
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
