import React from "react";
import './Login.scss';

const Login = () => {
    return (
        <>
        <div id="login">
            <h1>Login Page</h1>
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
                <h6>Don't have an account?</h6>
                <button className="btn btn-primary"> Create Account</button>
            </form>
        </div>
        </>
    );
}

export default Login;