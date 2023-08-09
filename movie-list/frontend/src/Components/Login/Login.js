import React from "react";
import './Login.scss';

const Login = () => {
    return (
        <>
        <div id="login">
            <h1>Login</h1>
            <form className='user-form' action="">
                <div className="mb-3 form-label">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email"></input>
                </div>
                <div className="mb-3 form-label">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password"></input>
                </div>
                <button className="btn btn-success">Login</button>
                
                <hr></hr>
                <div className="form-footer">
                    <p className="footer-text">Don't have an account?</p>
                    <a href=''>Sign Up</a>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;