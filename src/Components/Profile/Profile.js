import React, {useEffect} from 'react'
import ProfileForm from '../ProfileForm/ProfileForm'
import SkillsForm from '../SkillsForm/SkillsForm'
import { v4 as uuidv4 } from 'uuid';
import './Profile.css'

const Profile = ({user, accessToken}) => {

    useEffect(() => {
        ProfileFormMethod()
        
    }, [user])



    const ProfileFormMethod = () => {
        if (user.firstName == null || user.lastName == null) {
            return (
                <ProfileForm accessToken ={accessToken} user = {user}/>
            )
        } else if(user.skills == null){
            return(
                <SkillsForm accessToken ={accessToken} user ={user}/>
            )
        } else{
            return(
                <div className="Profile">
                    <h1 className="name"><span>Hi,</span><br></br>I am {user.firstName} {user.lastName}</h1>
                    <p><span>You can contact me on :</span>{user.username}</p>
                    <div className="skill-cont">
                        <p>I am good at</p>
                        <div className="skills">
                            {user.skills.map(i => {
                                return <h1 className="skills-tag" key ={uuidv4()}>{i}</h1>
                            })}
                        </div>
                    </div>
                </div>
            )   
        }  
    }
    
    return(
        <>
        {ProfileFormMethod()}
        </>
    )
}

export default Profile
