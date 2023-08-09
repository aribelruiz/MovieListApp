import React from "react";

// Shares CSS as Login
import '../Login/Login.scss';

const Signup = () => {
    return (
        <>
        <div id="signup">
            <h1>Sign Up</h1>
            <form className='user-form' action="">
                <div className="mb-3 form-label">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email"></input>
                </div>
                <div className="mb-3 form-label">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password"></input>
                </div>
                <button className="btn btn-success">Sign Up</button>
                
                <hr></hr>
                <div className="form-footer">
                    <p className="footer-text">Already have an account?</p>
                    <a href='/'>Login</a>
                </div>
            </form>
        </div>
        </>
    );
}

export default Signup;