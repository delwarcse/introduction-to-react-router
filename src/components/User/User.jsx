import { Link } from "react-router";

const User = ({user}) => {
    const {id, name, email, phone}=user;
    return (
        <div className="bg-blue-100 rounded-4xl border-4 border-yellow-300 p-4 my-2">
           <h2>{name}</h2>
           <h2>Email: {email}</h2>
           <h2>Phone: {phone}</h2> 
           <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button className="ml-3 bg-blue-700 p-1.5 my-2 rounded-2xl text-white">Users Details</button></Link>
        </div>
    );
};

export default User;