const User = ({user}) => {
    const { name, email, phone}=user;
    return (
        <div className="bg-blue-100 rounded-4xl border-4 border-indigo-600 p-4">
           <h2>{name}</h2>
           <h2>Email: {email}</h2>
           <h2>Phone: {phone}</h2> 
        </div>
    );
};

export default User;