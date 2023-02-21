import './Form.css'
import Field from '../Field'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from "react"

const Form = (props) => {    

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCreateEmployee({
            name, 
            position, 
            image, 
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the data to create the collaborator's card.</h2>
                <Field
                    type = "text"
                    required={true}
                    label="Name"
                    placeholder="Insert your name"
                    value={name}
                    onAltered={value => setName(value)}
                />
                <Field 
                    type = "text"
                    required={true} 
                    label="Position" 
                    placeholder="Insert your position" 
                    value={position}
                    onAltered={value => setPosition(value)}
                />
                <Field 
                    type = "text"
                    label="Image" 
                    placeholder="Insert the image address" 
                    value={image}
                    onAltered={value => setImage(value)}
                />
                <DropdownList 
                    type = "text"
                    label="Team" 
                    items={props.teams} 
                    value={team}
                    onAltered={value => setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
            <form onSubmit={(event)=>{
                event.preventDefault()
                props.createTeam({name:teamName, color:teamColor })
            }}>
                <h2>Fill in the data to create a new team.</h2>
                <Field
                    required={true}
                    type = "text"
                    label="Name"
                    placeholder="Insert team's name"
                    value={teamName}
                    onAltered={value => setTeamName(value)}
                />
                <Field 
                    required={true} 
                    type = "color"
                    label="Color" 
                    placeholder="Insert team's color" 
                    value={teamColor}
                    onAltered={value => setTeamColor(value)}
                />
                
                <Button>
                    Create new team
                </Button>
            </form>
        </section>
    )
}

export default Form