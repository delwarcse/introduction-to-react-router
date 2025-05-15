import { Link, useLoaderData } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const { body } = post;
    console.log(post)
    return (
        <div>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">Post Details are :</span> {body}</h2>

            <Link to={"/posts"}><button className="ml-3 bg-blue-700 p-2 font-bold my-2 rounded-2xl text-white">
                Back to Posts</button></Link>
        </div>
    );
};

export default PostDetails;