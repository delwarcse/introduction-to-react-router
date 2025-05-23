import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className="text-center font-bold text-2xl">
                Posts: {posts.length}</h2>
            <div className="text-center font-medium text-2xl grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;