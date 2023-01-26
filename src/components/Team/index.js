import Employee from '../Employee'
import './Team.css'

const Team = (props)=>{
    const cssTeam = {backgroundColor:props.secondaryColor}
    const cssBorder = {borderColor: props.primaryColor}
    
    return(
        props.employees.length > 0 &&
        <section className='team' style={cssTeam}>
            <h3 style={cssBorder}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee backgroundColor={props.primaryColor} key={employee.name} name={employee.name} position={employee.position} image={employee.image}/>)}        
            </div>
        </section>    
        )
}

export default Team
