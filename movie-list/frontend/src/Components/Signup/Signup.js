import {React, useState} from "react";
import validation from "./SignupValidation";

// Shares CSS as Login
import '../Login/Login.scss';

const Signup = () => {

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [values, setValues] = useState({
        name: '',
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
        <div id="signup">
            <h1>Sign Up</h1>
            <form className='user-form' action="" onSubmit={handleSubmit}>
            <div className="mb-3 form-label">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" name='name' onChange={handleInput} className={errors.name === ""? 'input-reg' : 'input-error'}></input>
                    {errors.name && <span className="error-message"> {errors.name} </span>}
                </div>
                <div className="mb-3 form-label">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} className={errors.email === ""? 'input-reg' : 'input-error'}></input>
                    {errors.email && <span className="error-message"> {errors.email} </span>}
                </div>
                <div className="mb-3 form-label">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className={errors.password === ""? 'input-reg' : 'input-error'}></input>
                    {errors.password && <span className="error-message"> {errors.password} </span>}
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