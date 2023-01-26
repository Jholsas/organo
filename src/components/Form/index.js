import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from "react"

const Form = (props) => {    

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

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
                <TextField
                    required={true}
                    label="Name"
                    placeholder="Insert your name"
                    value={name}
                    onAltered={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Position" 
                    placeholder="Insert your position" 
                    value={position}
                    onAltered={value => setPosition(value)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Insert the image address" 
                    value={image}
                    onAltered={value => setImage(value)}
                />
                <DropdownList 
                    label="Team" 
                    items={props.teams} 
                    value={team}
                    onAltered={value => setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form