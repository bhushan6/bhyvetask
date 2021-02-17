import React, {useEffect, useState} from 'react'
import Checkbox from './Checkbox'
import './SkillsForm.css'

import { useDispatch } from "react-redux";
import { setAccessToken } from '../../ReduxStore/actions/action';


const SkillsForm = ({accessToken, user}) => {

    const [skills, setSkills] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [pageNo, setPageNo] = useState(0)
    const dispatch = useDispatch()

    const loadSkills = async () => {
        const skills = await fetch('https://be.bhyve-app.com:3020/skills')
        const skillsres = await skills.json()
        setSkills(skillsres)
        setLoaded(true)
    }


    const postSkills = async () => {
        const response = await fetch('https://be.bhyve-app.com:3020/user/skills',{
            method : 'POST',
            body : JSON.stringify({
                "skills" : user.skills
            }),
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${accessToken}`
                } 
        })
    }

    const saveSkills = () => {
        if(user.skills.length < 3 || user.skills.length > 8){
            alert("You can add min 3 and max. 8 skills")
        } else{
            postSkills()
            dispatch(setAccessToken(accessToken, user))
        }
    }

    const nextPage = () => {
        if(pageNo < skills.length-10){
            setPageNo(pageNo+10)
        }
    }

    const prevPage = () => {
        if(pageNo > 0){
            setPageNo(pageNo-10)
        }
    }

    
    useEffect(() => {
        loadSkills()
    }, [loaded, pageNo])

    return (
        <div className="SkillsForm">
            <div className="tag-cont">
                {loaded? 
                    skills
                    .slice(pageNo, pageNo+10)
                    .map(i => <Checkbox skillName = {i.skillName} key={i.publicId} user={user} publicId ={i.publicId}/>)
                    : null
                }
            </div>
            <div className="btns">
                <button className="save-btn" onClick ={saveSkills}>Add Skills</button>
                <div className="pagination">
                    <button onClick ={prevPage}>Prvious</button>
                    <button onClick ={nextPage}>next</button>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm
