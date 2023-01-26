import "./Employee.css"

const Employee = ({name, position, image, backgroundColor}) => {
    return (
        <div className="employee">
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="footer_card">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}
export default Employee