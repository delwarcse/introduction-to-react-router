import { Link, useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website, username } = user;
    console.log(user);
    return (
        <div>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">  Details About User Page :</span>  {name}</h2>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">Username is :</span>  {username}</h2>
            <h2 className="text-center font-medium text-2xl">
                <span className="underline font-bold">Website is :</span> {website}</h2>

            <Link to={"/users"}><button className="ml-3 bg-blue-700 p-2 font-bold my-2 rounded-2xl text-white">Back to Users</button></Link>

        </div>
    );
};

export default UserDetails;