import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Login.css';
import Validation from '../LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import usePasswordToggle from '../hooks/usePasswordToggle';

const Login = () => {
    const [PasswordInputType1, PasswordInputType2, ToggleIcon1, ToggleIcon2] = usePasswordToggle();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                if(res.data === "Success"){
                    navigate("/dashboard");
                }else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err))
            
        }
    }

  return (
    <div className='login__container'>
        <Navbar />
        
        <div className='L_form__div'>
            <form onSubmit={handleSubmit} className='login__form'>
                <p>Enter details to Login</p>
                <div className='info__div'>
                    <label htmlFor='email'>Email</label><br/>
                    <input onChange={handleInput} type='email' name='email' placeholder='Enter email'/><br/>
                    {errors.email && <span className='caution'>{errors.email}</span>}
                </div>

                <div className='info__div'>
                    <label htmlFor='password'>Password</label><br/>
                    <input onChange={handleInput} type={PasswordInputType1} name='password' placeholder='min. 8 letters,uppercase and number'/>
                    <span className='password-toggle-icon'>{ToggleIcon1}</span>
                    <br/>
                    {errors.password && <span className='caution'>{errors.password}</span>}
                </div>
                

                 <button type='submit' className='login__btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login