import React, {useState} from 'react'
import './SkillsForm.css'




const Checkbox = ({skillName, user, publicId, userSkills}) => {
    if (user.skills === null) {
        user.skills = []
    }
const [checked, setChecked] = useState(false)

   

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
            {user.skills.includes(skillName) ? (
                <input 
                type="checkbox" 
                id="vehicle1" 
                name={skillName} 
                value={skillName}
                onChange = {handleChange}
                checked 
            />
            ) : (<input 
                type="checkbox" 
                id="vehicle1" 
                name={skillName} 
                value={skillName}
                onChange = {handleChange}
            />)}
            <label  htmlFor={skillName} >
                {skillName}
            </label>
        </div>
    )
}

export default Checkbox
// {user.skills.includes(skillName)


