import { Link, NavLink } from "react-router";
import './Header.css';

const Header = () => {
    return (
        <div className="my-11">
            <span className="flex justify-center text-center font-bold text-2xl my-4 items-center">My Website</span>
            <nav className="font-bold text-2xl flex justify-center gap-7">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;