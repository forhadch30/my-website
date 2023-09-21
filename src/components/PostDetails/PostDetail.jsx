import { useLoaderData} from "react-router-dom";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PostDetail = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    const navigate = useNavigate();
    const {id, title, body} = post;
    console.log(postId)
    const handleGoBack =()=>{
    navigate(-1)
   }
    return (
        <div>
            <h3>Post Details about:{id}</h3>
            <h3>{title}</h3>
            <p><span>{body}</span></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;