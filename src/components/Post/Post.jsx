import { Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
const Post = ({post}) => {
    const {id, title } =  post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid orange',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleDetails = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post of id:{id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleDetails}>Forhad Ahmed Click me button </button>
        </div>
    );
};

export default Post;