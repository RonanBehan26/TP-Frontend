import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginRegisterElements.css';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //e for event and if we don't compare .preventDefault, the page will reload and we will lose state
        console.log(email);
    }

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/sign-up`; 
    navigate(path);
  }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={routeChange}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login