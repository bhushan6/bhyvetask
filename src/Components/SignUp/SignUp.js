import React, {useState} from 'react'
import Form from '../Form/Form'
import './SignUp.css'
import useSignIn from '../Hook/useSignIn'

const SignUp = () => {
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

    const callSignUp = async (e) => {
        e.preventDefault()
        
        
            const response = await fetch("https://be.bhyve-app.com:3020/user/signup", {
                method : "POST",
                body : JSON.stringify({
                    "username" : credentials.email,
                    "password" : credentials.password
                        }),
                headers: { 
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            } 
            })
        
            if(response.status === 201){
               callSignIn(credentials.email, credentials.password)
            }else{
                const res = await response.json()
                alert(res.message)
            }

        
    }

    return (
        <div className="SignUp">
            <Form 
                type="Sign Up" 
                credentials={credentials} 
                handleChange = {handleChange} 
                formProcess = {callSignUp}
            />
        </div>
    )
}

export default SignUp
