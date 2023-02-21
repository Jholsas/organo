import "./Field.css"

const Field = (props)=> {

    const onDigit = (event)=>{
        props.onAltered(event.target.value)
    }

    return(
        <div className={`field field-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.value} 
                onChange={onDigit} 
                required={props.required} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Field
