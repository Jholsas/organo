import Employee from '../Employee'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

const Team = (props)=>{
    const cssTeam = {backgroundColor: hexToRgba(props.color,0.3)}
    const cssBorder = {borderColor: props.color}        
        
    return(
        props.employees.length > 0 &&
        <section className = 'team' style={cssTeam}>
            <input  onChange = {event => props.changeColor( event.target.value, props.name )} 
                    value = {props.color} 
                    type = "color" 
                    className='input-color' 
            />            
            <h3 style={cssBorder}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => {                    
                    return (
                        <Employee    
                            backgroundColor={props.color} 
                            key={employee.name} 
                            name={employee.name} 
                            position={employee.position} 
                            image={employee.image}        
                            favorite={employee.favorite}                    
                            onDelete={props.onDelete}
                            onFavorite={props.onFavorite}
                        />
                    )
                })}        
            </div>
        </section>    
    )
}

export default Team
