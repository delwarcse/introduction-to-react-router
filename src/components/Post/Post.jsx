import { Link } from "react-router";

const Post = ({post}) => {
    const {id,title}=post;
    return (
        <div className="bg-red-100 rounded-4xl border-4 border-green-300 p-4 my-2">
            <h4>Post of Id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button className="ml-3 bg-blue-700 p-1.5 my-2 rounded-2xl text-white">ShowDetails</button></Link>
        </div>
    );
};

export default Post;