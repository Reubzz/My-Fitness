import React, { useState } from 'react';
import axios from '../utils/axios.js';
import './login.css';

const Login = () => {
    const [action, setAction] = useState("Register");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const data = action === "Login" 
            ? { email, password } 
            : { name, email, password };

        try {
            const response = await axios.post(`/auth/${action.toLowerCase()}`, data);
            if (response.data.data.code === 200) {
                window.history.go(-1);
            }
        } catch (error) {
            console.error("Error sending data to backend:", error);
        }
    };

    const handleActionClick = (newAction) => {
        if (action !== newAction) {
            setAction(newAction);
            // Clear input fields when switching tabs
            setName("");
            setEmail("");
            setPassword("");
        } else {
            handleSubmit(); // Only submit if the action remains unchanged
        }
    };

    return (
        <div id='login-container'>
            <div className='login-container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="login-inputs-container">
                    {action === "Login" ? null : (
                        <div className='login-input-wrapper'>
                            <i className="fa-solid fa-user"></i>
                            <input 
                                type="text" 
                                placeholder='Name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                    )}
                    <div className='login-input-wrapper'>
                        <i className="fa-solid fa-envelope"></i>
                        <input 
                            type="email" 
                            placeholder='Email id' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='login-input-wrapper'>
                        <i className="fa-solid fa-lock-keyhole"></i>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                </div>
                {/* {action === "Register" ? null : (
                    <div className="forgot-password">
                        Forgot Password? <span>Click Here!</span>
                    </div>
                )} */}
                <div className="submit-container">
                    <div 
                        className={action === "Login" ? "submit gray" : "submit"} 
                        onClick={() => handleActionClick("Register")}
                    >
                        Register
                    </div>
                    <div 
                        className={action === "Register" ? "submit gray" : "submit"} 
                        onClick={() => handleActionClick("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
