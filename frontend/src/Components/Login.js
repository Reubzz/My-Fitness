import React, { useState } from 'react';
import axios from '../utils/axios.js';
import './login.css';
import email_icon from './Assets/email1.png';
import pass_icon from './Assets/password.png';
import user_icon from './Assets/person.png';

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
            const response = await axios.post(`http://localhost/${action.toLowerCase()}`, data);
            console.log("Response from backend:", response.data);
        } catch (error) {
            console.error("Error sending data to backend:", error);
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input 
                            type="text" 
                            placeholder='Name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder='Email id' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='input'>
                    <img src={pass_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
            </div>
            {action === "Register" ? null : (
                <div className="forgot-password">
                    Forgot Password? <span>Click Here!</span>
                </div>
            )}
            <div className="submit-container">
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => {
                        setAction("Register");
                        handleSubmit();
                    }}
                >
                    Register
                </div>
                <div 
                    className={action === "Register" ? "submit gray" : "submit"} 
                    onClick={() => {
                        setAction("Login");
                        handleSubmit();
                    }}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default Login;
