import React from 'react'
import './SkillsForm.css'

const Checkbox = ({skillName, user, publicId}) => {
    if (user.skills === null) {
        user.skills = []
    }

    const handleChange = (e) => {
        if(e.target.checked){
            user.skills.push(e.target.value)
        }else if(!e.target.checked){
            const remove = user.skills.indexOf(e.target.value)
            user.skills.splice(remove, 1)
        }
    }

    return (
        <div className="Checkbox">
            <input 
                type="checkbox" 
                id="vehicle1" 
                name={skillName} 
                value={skillName}
                onChange = {handleChange}
            />
            <label  htmlFor={skillName} >
                {skillName}
            </label>
        </div>
    )
}

export default Checkbox
