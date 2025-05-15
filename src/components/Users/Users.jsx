import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {

  const users = useLoaderData();
    
    console.log(users);
    return (
        <div>
            <h2 className="text-center font-bold text-2xl text-fuchsia-700">Total Users: {users.length}</h2>
            <h2 className="text-center font-bold text-2xl text-fuchsia-700">This is the page of our All Users</h2>
        <div className="text-center font-semibold text-2xl  grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
            {
                users.map(user => <User key={user.id} user={user} ></User>)
            }
        </div>
        </div>
    );
};

export default Users;