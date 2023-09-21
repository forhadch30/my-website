import { Link} from "react-router-dom";
import {useNavigate } from "react-router-dom";
const User = ({user}) => {
    const {id, name , email, phone } = user;
    const navigate =  useNavigate();
    const userStyle = {
        border: '2px solid orange',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleClick=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me </button></Link>
            <button onClick={handleClick}>Forhad Click me </button>
        </div> 
    );
};

export default User;