import React, {useEffect, useState} from 'react'
import './ProfileForm.css'
import { useDispatch } from "react-redux";
import { setAccessToken } from '../../ReduxStore/actions/action';

const ProfileForm = ({accessToken, user}) => {
    const [fullName, setFullName] = useState({
        firstName : "",
        lastName : ""
    })
    const dispatch = useDispatch()

  

    const handleChange = (e) => {
        const {name, value} = e.target

        setFullName({
            ...fullName,
            [name] : value
        })
    }

    const saveFullName = async () => {

        if(fullName.firstName == "" || fullName.lastName == ""){
            alert("Name Fields should not be empty")
        }else{
            const response = await fetch('https://be.bhyve-app.com:3020/user/basic/profile',{
            method : "POST",
            body : JSON.stringify({
                "firstName" : fullName.firstName,
                "lastName" : fullName.lastName
            }),
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            } 
        })
        // user
        user.firstName = fullName.firstName
        user.lastName = fullName.lastName
        dispatch(setAccessToken(accessToken, user))
        }
        
    }

    useEffect(() => {

    }, [user])

    return (
        <div className="ProfileForm">
            <h1>Profile Details</h1>
            <div className="firstname-field">
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={fullName.firstName} 
                    onChange={handleChange}
                />
            </div>
            <div className="lastname-field">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={fullName.lastName} 
                    onChange={handleChange}
                />
            </div>
            <button onClick={saveFullName}>Save</button>
        </div>
    )
}

export default ProfileForm
