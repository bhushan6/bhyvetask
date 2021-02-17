// import React from 'react'
import { useDispatch } from "react-redux";
import { setAccessToken } from '../../ReduxStore/actions/action';


const useSignIn =  (username, password) => {

    const dispatch = useDispatch()
    
    const callSignIn = async () => {
        const response = await fetch(
            "https://be.bhyve-app.com:3020/user/signin",
        {
            method: "POST",
            body : JSON.stringify({
            "username" : username,
            "password" : password
            }),
            headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    } 
            })
            const data = await response.json()
            if(data.accessToken){
            dispatch(setAccessToken(data.accessToken, data.user))
            } else{
            alert(data.message)
            }
        }    
        return {callSignIn}
    }


export default useSignIn