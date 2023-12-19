import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providres/AuthProvider";

const Login = () => {
  const { signIn , signInWithGoole} = useContext(AuthContext);
  const nevigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        nevigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin=()=>{
    signInWithGoole()
    .then(result=>{
      console.log(result)
      nevigate('/')
    })
    .catch();
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <h2 className="text-center font-extrabold text-5xl">Login Now!</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
           
            </div>
          </form>
          <button className="btn btn-secondary btn-outline" onClick={handleGoogleLogin}>Google</button>
          <div className="flex items-center justify-center">
            <p>New User? </p>
            <Link to="/signUp" className="text-blue-600 pl-4">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
