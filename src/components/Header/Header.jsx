import { Link } from "react-router";

const Header = () => {
    return (
        <div className="my-11">
            <span className="flex justify-center text-center font-bold text-2xl items-center">My Website</span>
            <nav className="font-bold text-2xl flex justify-center gap-7">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;