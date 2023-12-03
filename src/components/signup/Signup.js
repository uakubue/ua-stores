import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Signup.css';
import Validation from '../SignupValidation';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import usePasswordToggle from '../hooks/usePasswordToggle';

const Signup = () => {
    const [PasswordInputType1, PasswordInputType2, ToggleIcon1, ToggleIcon2] = usePasswordToggle();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});


    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "" && errors.confirmPassword === ""){
            axios.post("http://localhost:8081/signup", values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate("/dashboard");
        }
    }
    

  return (
    <div className='signup__container'>
        <Navbar />
        
        <div className='S_form__div'>
            <form onSubmit={handleSubmit} className='signup__form'>
                <p>Add details to Register</p>
                <div className='info__div'>
                    <label>Name</label><br />
                    <input onChange={handleInput} type='text' name='name' placeholder='Enter name'/><br/>
                    {errors.name && <span className='caution'>{errors.name}</span>}
                </div>

                <div className='info__div'>
                    <label>Email</label><br/>
                    <input onChange={handleInput} type='email' name='email' placeholder='Enter email'/><br/>
                    {errors.email && <span className='caution'>{errors.email}</span>}
                </div>

                <div className='info__div'>
                    <label>Password</label><br/>
                    <input 
                        onChange={handleInput} 
                        type={PasswordInputType1} 
                        name='password' 
                        placeholder='min.8 letters,uppercase and number,'
                    />
                    <span className='password-toggle-icon'>{ToggleIcon1}</span>
                    <br/>
                    {errors.password && <span className='caution'>{errors.password}</span>}
                </div>

                <div className='info__div'>
                    <label>Confirm password</label><br/>
                    <input 
                        onChange={handleInput} 
                        type={PasswordInputType2} 
                        name='confirmPassword' 
                        placeholder='Confirm password' 
                    />
                    <span className='password-toggle-icon'>{ToggleIcon2}</span>
                    <br/>
                    {errors.confirmPassword && <span className='caution'>{errors.confirmPassword}</span>}
                </div>

                <button type='submit' className='signup__btn'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Signup