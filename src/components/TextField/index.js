import "./TextField.css"

const TextField = (props)=> {

    const onDigit = (event)=>{
        props.onAltered(event.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField
