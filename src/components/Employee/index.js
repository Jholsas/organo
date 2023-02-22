import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart }from "react-icons/ai"
import "./Employee.css"

const Employee = ({id, name, position, image, favorite, backgroundColor, onDelete, onFavorite}) => {   

    function atfavorite(){
        onFavorite(id);        
    }

    const propsFavorite = {
        size : 24,
        onClick: atfavorite
    }

    return (
        <div className="employee">
            <AiFillCloseCircle 
                size={25} 
                className="delete" 
                onClick={ ()=> onDelete(id, name, position)}
            />
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="footer_card">
                <h4>{name}</h4>
                <h5>{position}</h5>
                <div className="favorite">                     
                    {favorite 
                        ?   <AiFillHeart {...propsFavorite} color='#FF0000'/> 
                        :   <AiOutlineHeart {...propsFavorite}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Employee
