import React, {useState} from 'react'
import Form from '../Form/Form'
import useSignIn from '../Hook/useSignIn'
import './SignIn.css'

import { useDispatch } from "react-redux";
import { setAccessToken } from '../../ReduxStore/actions/action';


const SignIn = () => {
    
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    })

    const {callSignIn} = useSignIn(credentials.email, credentials.password)

    const handleChange = e => {
        const {name, value} = e.target

        setCredentials({
            ...credentials,
            [name] : value
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        callSignIn()
    }

    return (
        <div className="SignIn">
          <Form 
            type="Sign In" 
            credentials = {credentials}
            handleChange = {handleChange} 
            formProcess = {signIn}
            />  
        </div>
    )
}

export default SignIn
