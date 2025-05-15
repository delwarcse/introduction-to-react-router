import { Link, useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate= useNavigate();
    const {postId} =useParams();
    const {id, body } = post;
    console.log(postId);
    console.log(post)
const handleGoBack=()=>{
    navigate(-1);
}
    return (
        <div>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">Post of Id:</span> {id}</h2>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">Post Details are :</span> {body}</h2>
            

            <Link to={"/posts"}><button className="ml-3 bg-blue-700 p-2 font-bold my-2 rounded-2xl text-white">
                Back to Posts</button></Link>
                <button className="border-2 ml-4" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;