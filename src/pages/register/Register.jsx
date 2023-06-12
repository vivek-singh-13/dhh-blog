import "./register.css";
import {Link } from "react-router-dom";

export default function Register(){
    return (
        <div className="register">
            <span className="loginTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." />
                <label >Email</label>
                <input className="registerInput" type="email" placeholder="Enter your email..." />
                <label >Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link to="/login" className="link">LOGIN</Link>
            </button>
        </div>
    )
}