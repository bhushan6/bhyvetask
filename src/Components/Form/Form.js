import React from 'react'
import './Form.css'
import {Link} from "react-router-dom"

const Form = ({type, credentials, handleChange, formProcess}) => {
    return (
        <div className='Form'>
            <h1>{type}</h1>
            <form>
                <div id="email-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        onChange = {handleChange} 
                        placeholder = "Enter valid e-mail address"
                    />
                </div>
                <div id="password-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange = {handleChange}
                        placeholder = "Enter password"
                    />
                </div>
                <button onClick = {formProcess}>
                    {type}
                </button>
            </form>
            {type === 'Sign Up'? (
                <div className="sign-in-link">
                    <p>Already have an account?</p>
                    <Link to = '/signin'>
                        <p className="link">Sign in</p>
                    </Link>
                </div>
            ) : (
                <div className="sign-up-link">
                    <p>Dosen't have an account?</p>
                    <Link to = '/'>
                        <p className="link">Sign Up</p>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Form
