import { React, useState } from "react";
import validation from "./LoginValidation";

// Shares CSS with Signup
import './Login.scss';

const Login = () => {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Update variables
        setErrors(validation(values));
    }
 
    return (
        <>
        <div id="login">
            <h1>Login</h1>
            <form className='user-form' action="" onSubmit={handleSubmit}>
                <div className="mb-3 form-label">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name='email' onChange={handleInput}></input>
                    {errors.email && <span className="error-message"> {errors.email} </span>}
                </div>
                <div className="mb-3 form-label">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name='password' onChange={handleInput}></input>
                    {errors.password && <span className="error-message"> {errors.password} </span>}
                </div>
                <button type='submit' className="btn btn-success">Login</button>
                
                <hr></hr>
                <div className="form-footer">
                    <p className="footer-text">Don't have an account?</p>
                    <a href='/signup'>Sign Up</a>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;